use crate::utils::print_header;
use std::collections::HashMap;

pub fn test() {
    print_header("hash maps test");

    let mut scores = HashMap::new();

    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    let team_name = String::from("Blue");
    let score = scores.get(&team_name);

    println!("score: {}", score.unwrap_or(&0));
}
