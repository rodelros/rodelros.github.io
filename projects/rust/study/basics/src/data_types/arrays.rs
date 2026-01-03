use crate::utils::{print_header,print_sub_header};
use crate::models::account::{Account};

pub fn test() {
    print_header("arrays test");

    let hello:[char; 5] = ['H','e','l','l','o'];

    let hel:&[char] = &hello[0..3];
    println!("hel = {:?}", hel);

    let e:&char = &hello[1];
    println!("e = {}", e);

    print_sub_header("array with inferred type.");
    let nums= [5; 10];

    println!("nums = {:?}", nums);

    print_sub_header("bound-checked access");
    if let Some(val) = hello.get(5) {
        println!("{}", val);
    } else {
        println!("out of bounds!!!")
    }

    test_iter();

}




fn test_iter() {
    print_sub_header("immutable iter and map");

    let accounts:[Account; 2] = [
        Account { name: "Alice".to_string(), id: String::from("123") },
        Account { name: "Bob".to_string(), id: "324".to_string() },
    ];

    print_sub_header("printing accounts");
    for account in &accounts {
        println!("name: {}, id: {}", account.name, account.id);
    }

    print_sub_header("map with iter");
    let names = accounts.iter().map(|account| &account.name);
    for name in names {
        println!("name: {}", name);
    }

}