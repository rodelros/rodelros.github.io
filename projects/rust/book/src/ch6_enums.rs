#[allow(dead_code)]
enum IpAddr {
    V4(String),
    V6(String)
}

#[allow(dead_code)]
enum Message {
    Quit,
    Move {x: i32, y: i32},
    Write(String),
    ChangeColor(i32, i32, i32)
}

enum Coin {
     Penny
    ,Nickel
    ,Dime
    ,Quarter
}

pub fn run() {
    println!("\n==  Chapter 6 : Enums ==");

    let quit = Message::Quit;
    let move_message = Message::Move{x: 5, y: 4};
    let write_message = Message::Write(String::from("the name"));
    let change_color_message = Message::ChangeColor(3, 7, 8);

    show_message(quit);
    show_message(move_message);
    show_message(write_message);
    show_message(change_color_message);

    pattern_matching(Coin::Dime);
    pattern_matching(Coin::Nickel);

    if_let();
}

fn show_message(msg: Message) {
    match msg {
        Message::ChangeColor(x, y, z) => {
            println!("The colors numbers are: {x}, {y}, {z}")
        },
        Message::Quit => println!("quitter"),
        Message::Move { x, y } => {
            let sum = x + y;
            println!("sum to move is {sum}");
        },
        Message::Write(str) => println!("here's the string, {str}"),
    }
}

fn pattern_matching(coin: Coin) {
    match coin {
        Coin::Dime => println!("It's a dime.")
        ,_ => println!("Not a dime.")
    };
}

fn if_let() {

    enum Status {
         Active
        ,Blocked
        ,Deleted{date_deleted: String}
        ,Inactive
    }

    let status = Status::Deleted{date_deleted: String::from("2023-01-01")};

    if let Status::Deleted{ date_deleted } = status {
        println!("account was deleted on {date_deleted}.");
    } else {
        println!("account is not deleted.");
    }
}