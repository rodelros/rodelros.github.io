use crate::utils::{print_header, print_sub_header};
use crate::models::booking::Booking;

pub fn test() {
    print_header("structs test");

    print_sub_header("using method syntax to create struct");
    let booking = Booking::new("2022-01-01".to_string(), "New York".to_string(), "London".to_string());
    println!("booking: {}", booking.flight_date);


}