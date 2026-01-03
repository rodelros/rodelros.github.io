use crate::utils::{print_header,print_sub_header};

pub fn test() {
    print_header("lifetimes test");

    let left = "I am left".to_string();
    let should_compare = true;
    if should_compare {
        let right = String::from("I am right");
        let longer_str = longer_string(&left, &right);    
        println!("longer_str: {}", longer_str);   
    }



}

fn longer_string<'a>(left_string: &'a str, right_string: &'a str) -> &'a str {
    print_sub_header("longer_string");

    if left_string.len() >= right_string.len() {
        left_string
    } else {
        right_string
    }
}
