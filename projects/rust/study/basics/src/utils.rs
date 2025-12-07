pub fn get_arguments() -> Vec<String> {
    std::env::args().collect()
}

pub fn print_header(s:&str) {
    let line = "=".repeat(s.len());
    println!("\n{}", line);
    println!("{}", s);
    println!("{}", line);
}

pub fn print_sub_header(s:&str) {
    println!("\n--- {} ---", s);
}