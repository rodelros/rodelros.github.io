#![allow(dead_code)]

fn main() {
    
    //new_function();
    //with_params(45, 'H');
    //let mut b = with_return();
    //println!("return value is {}", b);
    //b = false;
    //println!("b updated to {}", b);
    control_flow();
    
    //strings();
    //ownership();
}

fn new_function() {
    println!("----- newFunction -----");

}

fn with_params(x:i32, y:char) {
    println!("----- with_params -----");
    println!("x is {}, y is {}", x, y);
}

fn with_return() -> bool {
    println!("----- with_return -----");
    return true;
}

fn control_flow() {
    println!("----- control_flow -----");
    let b = true;
    let x = if b {6} else {8};
    println!("x is {}", x);

    let limit = 8;
    let mut i:i32 = 0;
    loop {
        if i == limit {
            println!("loop terminating at i:{}", i);
            break;
        }

        i += 1;
    }

    let lim = 10;
    i = 0;
    let found = loop {
        if i == lim {
            break i * 2;
        }
        i += 1;
    };
    println!("found is {}", found);
}

fn strings() {
    println!("----- strings -----");
    let mut str1 = "this is a string";
    let mut str2 = String::from("another string");
    println!("{} - {}", str1, str2);

    str1 = "changed it";
    str2 = "this also".to_string();

    println!("{} - {}", str1, str2);


}

fn ownership() {
    println!("----- ownership -----");
}
