
mod vegetables;

pub mod veggies {

    #[derive(Debug)]
    pub struct Asparagus {}

    #[allow(dead_code)]
    pub fn plant() {
        let _leek = crate::garden::vegetables::Leek{};
        println!("vegetables::Leek has been added.")
    }
}