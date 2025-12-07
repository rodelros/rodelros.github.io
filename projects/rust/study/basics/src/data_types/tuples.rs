use crate::utils::{print_header,print_sub_header};

pub fn test() {
    print_header("tuples test");

    let char_int: (char, i32) = ('x', 1);
    print_sub_header("display the char_int tuple");
    println!("char_int = {}, {}", char_int.0, char_int.1);

    print_sub_header("using custom tuple type");
    let my_tuple: MyTuple = (String::from("this"), 5, '4');
    display_my_tuple(my_tuple);


}

type MyTuple = (String, i32, char);

fn display_my_tuple(m:MyTuple) {
    println!("m = {:?}", m);
}