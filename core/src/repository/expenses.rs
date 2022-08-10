use rspc::Type;
use serde::{Deserialize, Serialize};
use sqlx::{MySql, Pool};

#[derive(Debug, Serialize, Type)]
pub struct ExpenseQueryResponse {
    pub id: i32,
    pub name: String,
    pub amount: rust_decimal::Decimal,
    pub date: chrono::NaiveDate,
    pub category: String,
    pub comment: Option<String>,
    pub tags: Option<String>,
}

#[derive(Clone, Debug, Deserialize, Type)]
pub struct CreateExpensesRequest {
    pub name: String,
    pub amount: rust_decimal::Decimal,
    pub date: chrono::NaiveDate,
    pub category: String,
    pub comment: Option<String>,
    pub tags: Option<Vec<String>>,
}

// pub async fn list_expenses<'e, E>(db: E) -> Result<Vec<ExpenseQueryResponse>, sqlx::Error>
// where
//     E: sqlx::Executor<'e, Database = sqlx::MySql>,
// {
//     sqlx::query_as!(
//         ExpenseQueryResponse,
//         r#"
// select
//     e. `id`,
//     e. `name`,
//     e. `amount`,
//     e. `date`,
//     ec. `name` as `category`,
//     e. `comment`,
//     group_concat(t. `name` separator ', ') as `tags`
// from
//     `expenses` e
//     inner join `expenses_categories` ec on e. `expenses_categories_id` = ec. `id`
//     left join `tags_expenses` te on e. `id` = te. `expenses_id`
//     left join `tags` t on t. `id` = te. `tags_id`
// group by
//     e. `id`,
//     e. `name`,
//     e. `amount`,
//     e. `date`,
//     ec. `name`,
//     e. `comment`
// order by
//     e. `date` desc,
//     e. `id` desc;
//         "#,
//     )
//     .fetch_all(db)
//     .await
// }

// pub async fn find_expense<'e, E>(db: E, id: i32) -> Result<ExpenseQueryResponse, sqlx::Error>
// where
//     E: sqlx::Executor<'e, Database = sqlx::MySql>,
// {
//     sqlx::query_as!(
//         ExpenseQueryResponse,
//         r#"
// select
//     e. `id`,
//     e. `name`,
//     e. `amount`,
//     e. `date`,
//     ec. `name` as `category`,
//     e. `comment`,
//     group_concat(t. `name` separator ', ') as `tags`
// from
//     `expenses` e
//     inner join `expenses_categories` ec on e. `expenses_categories_id` = ec. `id`
//     left join `tags_expenses` te on e. `id` = te. `expenses_id`
//     left join `tags` t on t. `id` = te. `tags_id`
// where
//     e. `id` = ?
// group by
//     e. `id`,
//     e. `name`,
//     e. `amount`,
//     e. `date`,
//     ec. `name`,
//     e. `comment`;
//         "#,
//         id,
//     )
//     .fetch_one(db)
//     .await
// }

// pub async fn delete_expense(
//     db: &Pool<MySql>,
//     id: i32,
// ) -> Result<ExpenseQueryResponse, sqlx::Error> {
//     // query the expense
//     let expense = find_expense(db, id).await;

//     match expense {
//         Ok(data) => {
//             // start a transaction
//             let mut transaction = db.begin().await.unwrap();

//             // delete the expense
//             sqlx::query!(r#"delete from `expenses` where `id` = ?;"#, id)
//                 .execute(&mut transaction)
//                 .await?;

//             // delete the tags relation
//             let res = sqlx::query!(
//                 r#"delete from `tags_expenses` where `expenses_id` = ?;"#,
//                 id
//             )
//             .execute(&mut transaction)
//             .await;
//             match res {
//                 Ok(_) => {
//                     // commit the transaction if tags deletion is successful
//                     transaction.commit().await.unwrap();
//                     Ok(data)
//                 }
//                 Err(e) => {
//                     match e {
//                         sqlx::Error::RowNotFound => {
//                             // commit the transaction even if no related tags are found
//                             // because not all expenses has related tags
//                             transaction.commit().await.unwrap();
//                             Ok(data)
//                         }
//                         _ => {
//                             // rollback for other errors
//                             transaction.rollback().await.unwrap();
//                             Err(e)
//                         }
//                     }
//                 }
//             }
//         }
//         Err(e) => Err(e),
//     }
// }

// pub async fn create_expense(
//     db: &Pool<MySql>,
//     req: CreateExpensesRequest,
// ) -> Result<ExpenseQueryResponse, sqlx::Error> {
//     // start a transaction
//     let mut tx = db.begin().await.unwrap();

//     let expenses_categories_id: i32;

//     // check if category exists
//     let res = sqlx::query!(
//         r#"select `id` from `expenses_categories` where `name` = ?"#,
//         req.category
//     )
//     .fetch_one(&mut tx)
//     .await;

//     match res {
//         // assign the category id if it exists
//         Ok(data) => expenses_categories_id = data.id,
//         Err(e) => {
//             match e {
//                 sqlx::Error::RowNotFound => {
//                     // create the category if it doesn't exist
//                     let res = sqlx::query!(
//                         r#"insert into `expenses_categories` (`name`) values (?);"#,
//                         req.category
//                     )
//                     .execute(&mut tx)
//                     .await;
//                     match res {
//                         Ok(data) => {
//                             if data.last_insert_id() > std::i32::MAX as u64 {
//                                 panic!("last_insert_id is too big");
//                             } else {
//                                 expenses_categories_id = data.last_insert_id() as i32;
//                             }
//                         }
//                         Err(e) => return Err(e),
//                     }
//                 }
//                 _ => return Err(e),
//             }
//         }
//     };

//     // process the given tags
//     let mut tags_ids: Vec<i32> = vec![];
//     match req.tags {
//         Some(tags) => {
//             for tag in tags {
//                 // check if tag exists
//                 let res = sqlx::query!(r#"select `id` from `tags` where `name` = ?"#, tag)
//                     .fetch_one(&mut tx)
//                     .await;

//                 match res {
//                     // push the tag id if it exists
//                     Ok(data) => tags_ids.push(data.id),
//                     Err(e) => {
//                         match e {
//                             sqlx::Error::RowNotFound => {
//                                 // create the tag if it doesn't exist
//                                 let res = sqlx::query!(
//                                     r#"insert into `tags` (`name`) values (?);"#,
//                                     tag
//                                 )
//                                 .execute(&mut tx)
//                                 .await;
//                                 match res {
//                                     Ok(data) => {
//                                         if data.last_insert_id() > std::i32::MAX as u64 {
//                                             panic!("last_insert_id is too big");
//                                         } else {
//                                             tags_ids.push(data.last_insert_id() as i32);
//                                         }
//                                     }
//                                     Err(e) => return Err(e),
//                                 }
//                             }
//                             _ => return Err(e),
//                         }
//                     }
//                 }
//             }
//         }
//         None => {},
//     };

//     // insert the expenses with given categories_id
//     let expenses_id = sqlx::query!(
//         r#"
// insert into
//     `expenses` (
//         `name`,
//         `amount`,
//         `date`,
//         `comment`,
//         `expenses_categories_id`
//     )
// values
//     (
//         ?,
//         ?,
//         ?,
//         ?,
//         ?
//     );
//         "#,
//         req.name,
//         req.amount,
//         req.date,
//         req.comment,
//         expenses_categories_id,
//     )
//     .execute(&mut tx)
//     .await?
//     .last_insert_id();

//     // insert the tags_expenses relation
//     for tag_id in tags_ids {
//         sqlx::query!(
//             r#"
// insert into
//     `tags_expenses` (`tags_id`, `expenses_id`)
// values
//     (?, last_insert_id());
//             "#,
//             tag_id,
//         )
//         .execute(&mut tx)
//         .await?;
//     }

//     // commit the transaction
//     tx.commit().await.unwrap();

//     // return the new expense
//     sqlx::query_as!(
//         ExpenseQueryResponse,
//         r#"
// select
//     e. `id`,
//     e. `name`,
//     e. `amount`,
//     e. `date`,
//     ec. `name` as `category`,
//     e. `comment`,
//     group_concat(t. `name` separator ', ') as `tags`
// from
//     `expenses` e
//     inner join `expenses_categories` ec on e. `expenses_categories_id` = ec. `id`
//     left join `tags_expenses` te on e. `id` = te. `expenses_id`
//     left join `tags` t on t. `id` = te. `tags_id`
// where
//     e. `id` = ?
// group by
//     e. `id`,
//     e. `name`,
//     e. `amount`,
//     e. `date`,
//     ec. `name`,
//     e. `comment`;
//                 "#,
//         expenses_id,
//     )
//     .fetch_one(db)
//     .await
// }
