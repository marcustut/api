pub fn transform_sqlx_error(err: sqlx::Error) -> rspc::Error {
    match err {
        sqlx::Error::RowNotFound => {
            rspc::Error::new(rspc::ErrorCode::NotFound, String::from("not found"))
        }
        _ => rspc::Error::new(
            rspc::ErrorCode::InternalServerError,
            String::from("internal server error"),
        ),
    }
}
