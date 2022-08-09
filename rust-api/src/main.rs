use axum::{extract::Path, routing::get};
use dotenv::dotenv;
use serde::{Deserialize, Serialize};
use sqlx::{mysql::MySqlPoolOptions, MySql, Pool};
use std::env;
use tower_http::cors::{Any, CorsLayer};

use rspc::{internal::specta::Type, selection, Config};

#[derive(Debug, Serialize, Type)]
struct ExpenseQueryResult {
    id: i32,
    name: String,
    amount: rust_decimal::Decimal,
    date: chrono::NaiveDate,
    category: String,
    comment: Option<String>,
    tags: Option<String>,
}

#[derive(Debug, Deserialize, Type)]
struct CreateExpensesRequest {
    name: String,
    amount: rust_decimal::Decimal,
    date: chrono::NaiveDate,
    category: String,
    comment: Option<String>,
    tags: Option<Vec<String>>,
}

struct Ctx {
    pool: Pool<MySql>,
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    dotenv().ok();

    let router = rspc::Router::<Ctx>::new()
        .config(Config::new().export_ts_bindings("./generated/bindings.ts"))
        .query("version", |_, _: ()| env!("CARGO_PKG_VERSION"))
        .query("listExpenses", |ctx: Ctx, _: ()| async move {
            let expenses: Vec<ExpenseQueryResult> = sqlx::query_as!(
                ExpenseQueryResult,
                r#"
select
    e. `id`,
    e. `name`,
    e. `amount`,
    e. `date`,
    ec. `name` as `category`,
    e. `comment`,
    group_concat(t. `name` separator ', ') as `tags`
from
    `expenses` e
    inner join `expenses_categories` ec on e. `expenses_categories_id` = ec. `id`
    left join `tags_expenses` te on e. `id` = te. `expenses_id`
    left join `tags` t on t. `id` = te. `tags_id`
group by
    e. `id`,
    e. `name`,
    e. `amount`,
    e. `date`,
    ec. `name`,
    e. `comment`
order by
    e. `date` desc,
    e. `id` desc;
                "#,
            )
            .fetch_all(&ctx.pool)
            .await
            .unwrap(); // TODO: handle this error

            selection!(
                expenses,
                [{ id, name, amount, date, category, comment, tags }]
            )
        })
        .mutation(
            "createExpense",
            |ctx: Ctx, req: CreateExpensesRequest| async move {
                // start a transaction
                let mut transaction = ctx.pool.begin().await.unwrap();

                let expenses_categories_id: i32;

                // check if category exists
                let res = sqlx::query!(
                    r#"select `id` from `expenses_categories` where `name` = ?"#,
                    req.category
                )
                .fetch_one(&mut transaction)
                .await;

                match res {
                    Ok(data) => expenses_categories_id = data.id,
                    Err(_) => {
                        // insert the category if it doesn't exist
                        let last_insert_id = sqlx::query!(
                            r#"insert into `expenses_categories` (`name`) values (?)"#,
                            req.category,
                        )
                        .execute(&mut transaction)
                        .await
                        .unwrap()
                        .last_insert_id();

                        if last_insert_id > std::i32::MAX as u64 {
                            panic!("last_insert_id is too big");
                        } else {
                            expenses_categories_id = last_insert_id as i32;
                        }
                    }
                };

                // process the given tags
                let mut tags_ids: Vec<i32> = vec![];
                match req.tags {
                    Some(tags) => {
                        for tag in tags {
                            // check if tag exists
                            let res =
                                sqlx::query!(r#"select `id` from `tags` where `name` = ?"#, tag)
                                    .fetch_one(&mut transaction)
                                    .await;

                            match res {
                                Ok(data) => tags_ids.push(data.id),
                                Err(_) => {
                                    let last_insert_id = sqlx::query!(
                                        r#"insert into `tags` (`name`) values (?)"#,
                                        tag
                                    )
                                    .execute(&mut transaction)
                                    .await
                                    .unwrap()
                                    .last_insert_id();

                                    if last_insert_id > std::i32::MAX as u64 {
                                        panic!("last_insert_id is too big");
                                    } else {
                                        tags_ids.push(last_insert_id as i32);
                                    }
                                }
                            }
                        }
                    }
                    None => {}
                };

                // insert the expenses with given categories_id
                let expenses_id = sqlx::query!(
                    r#"
insert into
    `expenses` (
        `name`,
        `amount`,
        `date`,
        `comment`,
        `expenses_categories_id`
    )
values
    (
        ?,
        ?,
        ?,
        ?,
        ?
    );
                    "#,
                    req.name,
                    req.amount,
                    req.date,
                    req.comment,
                    expenses_categories_id,
                )
                .execute(&mut transaction)
                .await
                .unwrap()
                .last_insert_id();

                // insert the tags_expenses relation
                for tag_id in tags_ids {
                    sqlx::query!(
                        r#"
insert into `tags_expenses` (`tags_id`, `expenses_id`) values (?, last_insert_id());
                        "#,
                        tag_id,
                    )
                    .execute(&mut transaction)
                    .await
                    .unwrap();
                }

                // commit the transaction
                transaction.commit().await.unwrap();

                // return the new expenses id
                let expense: ExpenseQueryResult = sqlx::query_as!(
                    ExpenseQueryResult,
                    r#"
select
    e. `id`,
    e. `name`,
    e. `amount`,
    e. `date`,
    ec. `name` as `category`,
    e. `comment`,
    group_concat(t. `name` separator ', ') as `tags`
from
    `expenses` e
    inner join `expenses_categories` ec on e. `expenses_categories_id` = ec. `id`
    left join `tags_expenses` te on e. `id` = te. `expenses_id`
    left join `tags` t on t. `id` = te. `tags_id`
where
    e. `id` = ?
group by
    e. `id`,
    e. `name`,
    e. `amount`,
    e. `date`,
    ec. `name`,
    e. `comment`;
                "#,
                    expenses_id,
                )
                .fetch_one(&ctx.pool)
                .await
                .unwrap();

                selection!(
                    expense,
                    { id, name, amount, date, category, comment, tags }
                )
            },
        )
        .mutation("deleteExpense", |ctx: Ctx, id: i32| async move {
            // query the expense
            let expense = sqlx::query_as!(
                ExpenseQueryResult,
                r#"
select
    e. `id`,
    e. `name`,
    e. `amount`,
    e. `date`,
    ec. `name` as `category`,
    e. `comment`,
    group_concat(t. `name` separator ', ') as `tags`
from
    `expenses` e
    inner join `expenses_categories` ec on e. `expenses_categories_id` = ec. `id`
    left join `tags_expenses` te on e. `id` = te. `expenses_id`
    left join `tags` t on t. `id` = te. `tags_id`
where
    e. `id` = ?
group by
    e. `id`,
    e. `name`,
    e. `amount`,
    e. `date`,
    ec. `name`,
    e. `comment`;
                "#,
                id,
            )
            .fetch_one(&ctx.pool)
            .await;

            match expense {
                Ok(data) => {
                    // start a transaction
                    let mut transaction = ctx.pool.begin().await.unwrap();

                    // delete the expense
                    // TODO: handle this error
                    let _res = sqlx::query!(r#"delete from `expenses` where `id` = ?;"#, id)
                        .execute(&mut transaction)
                        .await
                        .unwrap();

                    // delete the tags relation
                    // TODO: handle this error
                    let _res = sqlx::query!(
                        r#"delete from `tags_expenses` where `expenses_id` = ?;"#,
                        id
                    )
                    .execute(&mut transaction)
                    .await
                    .unwrap();

                    // commit the transaction
                    transaction.commit().await.unwrap();
                    Ok(selection!(
                        data,
                        { id, name, amount, date, category, comment, tags }
                    ))
                }
                Err(_) => Err(rspc::Error::new(
                    rspc::ErrorCode::NotFound,
                    format!("Expense with id {} not found", id),
                )),
            }
        })
        .build()
        .arced();

    let cors = CorsLayer::new()
        .allow_methods(Any)
        .allow_headers(Any)
        .allow_origin(Any);

    let pool = MySqlPoolOptions::new()
        .max_connections(5)
        .connect(&env::var("DATABASE_URL")?)
        .await
        .expect("Failed to connect to database");

    let app = axum::Router::new()
        .route("/", get(|| async { "Hello 'rspc'!" }))
        .route(
            "/rspc/:id",
            router
                .clone()
                .axum_handler(move |Path(path): Path<String>| {
                    println!("Client requested operation '{}'", path);
                    Ctx { pool }
                }),
        )
        // .route("/rspcws", router.axum_ws_handler(move || Ctx {}))
        .layer(cors);

    let addr = "[::]:4000".parse::<std::net::SocketAddr>().unwrap(); // This listens on IPv6 and IPv4
    println!("Listening on http://{}/rspc/version", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();

    Ok(())
}
