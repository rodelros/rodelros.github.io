pub fn add(x:i32, y:i32) -> i64 {
    x as i64 + y as i64
}

pub fn add_checked(x:i32, y:i32) -> Option<i32>{
    x.checked_add(y)
}

pub fn print_header(s:&str) {
    let divider = "=".repeat(s.len());
    println!("\n{}", divider);
    println!("{}", s);
    println!("{}", divider);
}