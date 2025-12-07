use basics::utils::get_arguments;
use basics::utils::print_header;


fn main() {

    print_header("Show app name from argument.");
    let app_name = &get_arguments()[0];
    println!("app_name: {}", app_name);

    basics::data_types::arrays::test();
    basics::data_types::tuples::test();
    basics::data_types::structs::test();


}
