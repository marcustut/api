use axum::{extract::Path, routing::get};
use tower_http::cors::{Any, CorsLayer};

use rspc::Config;

struct Ctx {}

#[tokio::main]
async fn main() {
    let router = rspc::Router::<Ctx>::new()
        .config(Config::new().export_ts_bindings("./generated/bindings.ts"))
        .query("version", |_, _: ()| env!("CARGO_PKG_VERSION"))
        .query("echo", |_, v: String| v)
        .query("error", |_, _: ()| {
            Err(rspc::Error::new(
                rspc::ErrorCode::InternalServerError,
                "Something went wrong".into(),
            )) as Result<String, rspc::Error>
        })
        .query("transformMe", |_, _: ()| "Hello, world!".to_string())
        .mutation("sendMsg", |_, v: String| {
            println!("Client said '{}'", v);
            v
        })
        .build()
        .arced();

    let cors = CorsLayer::new()
        .allow_methods(Any)
        .allow_headers(Any)
        .allow_origin(Any);

    let app = axum::Router::new()
        .route("/", get(|| async { "Hello 'rspc'!" }))
        .route(
            "/rspc/:id",
            router.clone().axum_handler(|Path(path): Path<String>| {
                println!("Client requested operation '{}'", path);
                Ctx {}
            }),
        )
        .route("/rspcws", router.axum_ws_handler(|| Ctx {}))
        .layer(cors);

    let addr = "[::]:4000".parse::<std::net::SocketAddr>().unwrap(); // This listens on IPv6 and IPv4
    println!("Listening on http://{}/rspc/version", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
