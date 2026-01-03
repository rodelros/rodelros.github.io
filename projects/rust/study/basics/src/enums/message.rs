use crate::utils::{print_header, print_sub_header};

#[derive(Debug)]
pub enum Message {
    Quit,                       // unit struct variant
    Move { x: i32, y: i32 },    // struct variant
    Write(String),              // tuple variant
    ChangeColor(i32, i32, i32), // tuple variant
}

pub fn test() {
    print_header("enum test");
    let msg = Message::Write(String::from("hello"));
    println!("msg: {:#?}", msg);

    let place = String::from("world");

    print_sub_header("using match");
    display_if_hello(&place);
    
    if let Message::Write(msg) = msg {
        display_if_hello(&msg);
    }


}

fn display_if_hello(str: &str) {
    match str {
        "hello" => println!("hello"),
        _ => println!("not hello")
    }
}