use basics::utils::get_arguments;
use basics::utils::{print_header, print_sub_header};
use basics::age_plus_one;

mod non_mod; //declare the file non_mod.rs as a module


fn main() {

    print_header("Show app name from argument.");
    let app_name = &get_arguments()[0];
    println!("app_name: {}", app_name);

    basics::data_types::arrays::test();
    basics::data_types::tuples::test();
    basics::data_types::structs::test();

    basics::models::transaction::update::update();
    basics::enums::message::test();
    basics::lifetimes::test();

    print_sub_header("string format");
    let name = String::from("John");
    let age = 30;
    println!("{} is {} years old", name, age);

    let s = format!("{name} is {} years old", age_plus_one(age));
    println!("s: {}", s);   

    basics::patterns::builder::test();
    basics::data_types::hash_maps::test();

    non_mod::show();

}



