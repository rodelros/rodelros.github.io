use std::time::SystemTime;

#[allow(unused_variables)]
pub fn run() {
    println!("\n==  Chapter 5 : Structs ==");    
    let current_time = SystemTime::now();
    structs();
    tuple_struct();
}

fn structs() {
    #[derive(Debug)]
    #[allow(dead_code)]
    struct Account {
        id: String,
        name: String
    }

    let account = Account {
        id: String::from("some id"),
        name: String::from("my name")
    };

    println!("{:?}", account);
}
struct Coord(i32, i32);

fn tuple_struct() {
    let coord = Coord(5, 6);
    let Coord(x, y) = coord;
    println!("x is {x}\ny is {y}");
    display(&coord);
}

fn display(coord: &Coord) {
    println!("\n\t== fn display");
    let Coord(x, y) = coord;
    println!("coordx is {x},  is {y}");
}
