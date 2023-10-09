
//packages_crates_modules::f1
mod garden;
mod ch6_enums;

mod same_file {

    #[allow(dead_code)]
    pub fn inside() {
        println!("same_file::inside()");
    }
}



#[allow(unused_variables)]
fn main() {
    
    use crate::garden::veggies::Asparagus;
    /*****/
    crate::same_file::inside();
    let asparagus = Asparagus{};
    crate::garden::veggies::plant();

    // function f1 is inside lib.rs
    packages_crates_modules::f1();
    /*****/
    ch6_enums::run();
}
