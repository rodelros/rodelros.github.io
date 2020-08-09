use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {

    // tuple
    let tup : (i32, bool) = (45, true);
    
    println!("tuple number is {}", tup.0);
    // tuple destructuring
    let (x,y) = tup;
    println!("The tuple number is {}, the boolean is {}", x, y);

    println!("\n----- Guess the number -----");
    let secret_number = rand::thread_rng().gen_range(1,101);

    loop {
        println!("\nPlease input your guess.");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }


}
