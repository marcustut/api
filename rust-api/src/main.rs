use axum::{extract::Path, routing::get};
use dotenv::dotenv;
use serde::Serialize;
use sqlx::{mysql::MySqlPoolOptions, MySql, Pool};
use std::env;
use tower_http::cors::{Any, CorsLayer};

use rspc::{selection, Config};

#[derive(Debug, Serialize)]
struct SpectaCompatibleNaiveDate(chrono::NaiveDate);

impl From<chrono::NaiveDate> for SpectaCompatibleNaiveDate {
    fn from(date: chrono::NaiveDate) -> Self {
        Self(date)
    }
}

impl rspc::internal::specta::Type for SpectaCompatibleNaiveDate {
    const NAME: &'static str = "NaiveDate";

    fn inline(
        _: rspc::internal::specta::DefOpts,
        _: &[rspc::internal::specta::DataType],
    ) -> rspc::internal::specta::DataType {
        rspc::internal::specta::DataType::Primitive(rspc::internal::specta::PrimitiveType::String)
    }

    fn reference(
        _: rspc::internal::specta::DefOpts,
        _: &[rspc::internal::specta::DataType],
    ) -> rspc::internal::specta::DataType {
        rspc::internal::specta::DataType::Primitive(rspc::internal::specta::PrimitiveType::String)
    }

    fn definition(_: rspc::internal::specta::DefOpts) -> rspc::internal::specta::DataType {
        panic!()
    }
}

#[derive(Debug, Serialize)]
struct SpectaCompatibleDecimal(rust_decimal::Decimal);

impl From<rust_decimal::Decimal> for SpectaCompatibleDecimal {
    fn from(decimal: rust_decimal::Decimal) -> Self {
        Self(decimal)
    }
}

impl rspc::internal::specta::Type for SpectaCompatibleDecimal {
    const NAME: &'static str = "Decimal";

    fn inline(
        _: rspc::internal::specta::DefOpts,
        _: &[rspc::internal::specta::DataType],
    ) -> rspc::internal::specta::DataType {
        rspc::internal::specta::DataType::Primitive(rspc::internal::specta::PrimitiveType::f64)
    }

    fn reference(
        _: rspc::internal::specta::DefOpts,
        _: &[rspc::internal::specta::DataType],
    ) -> rspc::internal::specta::DataType {
        rspc::internal::specta::DataType::Primitive(rspc::internal::specta::PrimitiveType::f64)
    }

    fn definition(_: rspc::internal::specta::DefOpts) -> rspc::internal::specta::DataType {
        panic!()
    }
}

#[derive(Debug, Serialize)]
struct ExpenseQueryResult {
    id: i32,
    name: String,
    amount: rust_decimal::Decimal,
    date: chrono::NaiveDate,
    category: String,
    comment: Option<String>,
    tags: Option<String>,
}

#[derive(Debug, Serialize)]
struct ListExpensesResponse {
    id: i32,
    name: String,
    amount: SpectaCompatibleDecimal,
    date: SpectaCompatibleNaiveDate,
    category: String,
    comment: Option<String>,
    tags: Option<String>,
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
    e. `date` desc;
        "#,
            )
            .fetch_all(&ctx.pool)
            .await
            .unwrap();

            selection!(
                expenses
                    .into_iter()
                    .map(|e| {
                        ListExpensesResponse {
                            id: e.id,
                            name: e.name,
                            amount: SpectaCompatibleDecimal::from(e.amount),
                            date: SpectaCompatibleNaiveDate::from(e.date),
                            category: e.category,
                            comment: e.comment,
                            tags: e.tags,
                        }
                    })
                    .collect::<Vec<ListExpensesResponse>>(),
                [{ id, name, amount, date, category, comment, tags }]
            )
        })
        .mutation("createExpenses", |_, v: String| {
            println!("Client said '{}'", v);
            v
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
