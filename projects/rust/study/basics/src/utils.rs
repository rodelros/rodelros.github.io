pub fn get_arguments() -> Vec<String> {
    std::env::args().collect()
}

pub fn print_header(s: &str) {
    let line = "=".repeat(s.len());
    println!("\n{}", line);
    println!("{}", s);
    println!("{}", line);
}

pub fn print_sub_header(s: &str) {
    println!("\n--- {} ---", s);
}

use std::io::{self, Write};

pub fn get_answer(prompt: &str) -> Result<String, io::Error> {
    print!("{prompt}: ");
    io::stdout().flush()?;

    let mut input = String::new();
    io::stdin().read_line(&mut input)?;
    Ok(input.trim().to_string())
}
