use rspc::Type;
use serde::Serialize;

#[derive(Debug, Serialize, Type)]
pub struct IncomeQueryResult {
    pub id: i32,
    pub name: String,
    pub amount: rust_decimal::Decimal,
    pub date: chrono::NaiveDate,
    pub category: String,
    pub comment: Option<String>,
    pub tags: Option<String>,
}

// pub async fn list_incomes<'e, E>(db: E) -> Result<Vec<IncomeQueryResult>, sqlx::Error>
// where
//     E: sqlx::Executor<'e, Database = sqlx::MySql>,
// {
//     sqlx::query_as!(
//         IncomeQueryResult,
//         r#"
// select
//     i. `id`,
//     i. `name`,
//     i. `amount`,
//     i. `date`,
//     ic. `name` as `category`,
//     i. `comment`,
//     group_concat(t. `name` separator ', ') as `tags`
// from
//     `incomes` i
//     inner join `incomes_categories` ic on i. `incomes_categories_id` = ic. `id`
//     left join `tags_incomes` ie on i. `id` = ie. `incomes_id`
//     left join `tags` t on t. `id` = ie. `tags_id`
// group by
//     i. `id`,
//     i. `name`,
//     i. `amount`,
//     i. `date`,
//     ic. `name`,
//     i. `comment`
// order by
//     i. `date` desc,
//     i. `id` desc;
//                 "#,
//     )
//     .fetch_all(db)
//     .await
// }
