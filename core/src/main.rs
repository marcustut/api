use axum::{extract::Path, routing::get};
use dotenv::dotenv;
use sqlx::{mysql::MySqlPoolOptions, MySql, Pool};
use std::env;
use std::sync::Arc;
use tower_http::cors::{Any, CorsLayer};

use rspc::{selection, Config};

use crate::prisma::PrismaClient;
use crate::repository::expenses::CreateExpensesRequest;

pub mod error;
pub mod prisma;
pub mod repository;

struct Ctx {
    // pool: Pool<MySql>,
    db: Arc<prisma::PrismaClient>,
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    dotenv().ok();

    let router = rspc::Router::<Ctx>::new()
        .config(Config::new().export_ts_bindings("./index.ts"))
        .query("version", |_, _: ()| env!("CARGO_PKG_VERSION"))
        .query("listExpenses", |ctx: Ctx, _: ()| async move {
            ctx.db.expenses().find_many(vec![]).exec().await.unwrap()
            // let expenses = repository::expenses::list_expenses(&ctx.pool)
            //     .await
            //     .map_err(error::transform_sqlx_error);
            // match expenses {
            //     Ok(data) => Ok(selection!(
            //         data,
            //         [{ id, name, amount, date, category, comment, tags }]
            //     )),
            //     Err(err) => Err(err),
            // }
        })
        // .query("listIncomes", |ctx: Ctx, _: ()| async move {
        //     let incomes = repository::incomes::list_incomes(&ctx.pool)
        //         .await
        //         .map_err(error::transform_sqlx_error);
        //     match incomes {
        //         Ok(data) => Ok(selection!(
        //             data,
        //             [{ id, name, amount, date, category, comment, tags }]
        //         )),
        //         Err(e) => Err(e),
        //     }
        // })
        // .mutation(
        //     "createExpense",
        //     |ctx: Ctx, req: CreateExpensesRequest| async move {
        //         let expense = repository::expenses::create_expense(&ctx.pool, req)
        //             .await
        //             .map_err(error::transform_sqlx_error);
        //         match expense {
        //             Ok(data) => Ok(selection!(
        //                 data,
        //                 { id, name, amount, date, category, comment, tags }
        //             )),
        //             Err(e) => Err(e),
        //         }
        //     },
        // )
        // .mutation("deleteExpense", |ctx: Ctx, id: i32| async move {
        //     let expense = repository::expenses::delete_expense(&ctx.pool, id)
        //         .await
        //         .map_err(error::transform_sqlx_error);
        //     match expense {
        //         Ok(data) => Ok(selection!(
        //             data,
        //             { id, name, amount, date, category, comment, tags}
        //         )),
        //         Err(e) => Err(e),
        //     }
        // })
        .build()
        .arced();

    let cors = CorsLayer::new()
        .allow_methods(Any)
        .allow_headers(Any)
        .allow_origin(Any);

    // let pool = MySqlPoolOptions::new()
    //     .max_connections(5)
    //     .connect(&env::var("DATABASE_URL")?)
    //     .await
    //     .expect("Failed to connect to database");

    let db = Arc::new(
        prisma::new_client()
            .await
            .expect("failed to connect to database (prisma)"),
    );

    let app = axum::Router::new()
        .route("/", get(|| async { "Hello 'rspc'!" }))
        .route(
            "/rspc/:id",
            router
                .clone()
                .axum_handler(move |Path(path): Path<String>| {
                    println!("Client requested operation '{}'", path);
                    Ctx { db }
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
