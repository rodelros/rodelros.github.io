pub mod data_types;
pub mod enums;
pub mod lifetimes;
pub mod models;
pub mod patterns;
pub(crate) mod utils;

pub fn age_plus_one(age: i32) -> i32 {
    age + 1
}
