#![allow(dead_code)]

use std::io;



fn main() {

    display_title("invalid array access");
    invalid_array_access();

    display_title("mutable string from function");
    mutable_string_from_function();

    display_title("struct partial move");
    struct_partial_move();

    display_title("implicit multi pointer deref");
    implicit_multi_pointer_deref();

}

fn display_title(title: &str) { 
    let hr = String::from("=".repeat(title.len() + 2));
    println!("{}\n {}\n{}", hr, title, hr);
}

fn invalid_array_access() {
    let a = [1, 2, 3, 4, 5];

    println!("Please enter an array index.");

    let mut index = String::new();

    io::stdin()
        .read_line(&mut index)
        .expect("Failed to read line");

    let index: usize = index
        .trim()
        .parse()
        .expect("Index entered was not a number");

    let element = a[index];

    println!("The value of the element at index {index} is: {element}");    
}

fn mutable_string_from_function() {

    fn first_char(s: &str) -> Option<char> {
        s.chars().next()
    }
    fn get_string(name: &str) -> String {

        if let Some(first_char) = first_char(name) {
            let substr = &name[1..];
            format!("Hello {}{}!", first_char.to_uppercase(), substr)
        } else {
            String::from("Hello!")
        }
    }

    let mut greeting = get_string("Rodel");
    greeting.push_str(", how are you?");
    println!("{}", greeting);
}

fn struct_partial_move() {

    struct User {
        username: String,
        email: String,
        sign_in_count: u64,
        active: bool,
    }

    let display_email = |email: String| println!("Email is {}", email);

    let user = User {
        username: String::from("Rodel"),
        email: String::from("test@test.com"),
        sign_in_count: 1,
        active: true,
    };

    display_email(user.email);

    // This will fail because email is moved
    //println!("Email is {}", user.email);

}

fn implicit_multi_pointer_deref() {
    let x: Box<Box<i32>> = Box::new(Box::new(-5));
    println!("abs of x is {}", x.abs());
}