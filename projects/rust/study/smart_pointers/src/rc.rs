use basics::utils::print_sub_header;
use std::rc::Rc;

pub fn test() {
    print_sub_header("show reference count");

    // Create the original Rc. Strong count starts at 1.
    let str = Rc::new("string to display");

    // Closure to print the count. Note: it takes a reference to avoid moving the Rc.
    let display_count = |r: &Rc<&str>| println!("reference count: {}", Rc::strong_count(r));

    {
        // Increment count to 2 by cloning the pointer.
        let ref1 = Rc::clone(&str);
        display_count(&ref1);

        {
            // Increment count to 3. This 'ref1' shadows the outer 'ref1'.
            let ref1 = Rc::clone(&str);
            display_count(&ref1);
        } // The inner 'ref1' is dropped here. Strong count returns to 2.

        // Access the data by dereferencing the Rc pointer.
        println!("content: {}", *ref1);
    } // The outer 'ref1' is dropped here. Strong count returns to 1.

    // Final check: only the original 'str' remains.
    display_count(&str);
}
