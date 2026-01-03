// this is a module that has no sub directory associated with it.

pub struct Booking {
    pub flight_date: String,
    pub from: String,
    pub to: String
}

impl Booking {
    pub fn new(flight_date: String, from: String, to: String) -> Self {
        Self {
            flight_date,
            from,
            to
        }
    }
}