use crate::utils::{print_header,print_sub_header};

pub fn test() {
    print_header("arrays test");

    let hello:[char; 5] = ['H','e','l','l','o'];

    let hel:&[char] = &hello[0..3];
    println!("hel = {:?}", hel);

    let e:&char = &hello[1];
    println!("e = {}", e);

    print_sub_header("array with inferred type.");
    let nums= [5; 10];

    println!("nums = {:?}", nums);

    print_sub_header("bound-checked access");
    if let Some(val) = hello.get(5) {
        println!("{}", val);
    } else {
        println!("out of bounds!!!")
    }

}