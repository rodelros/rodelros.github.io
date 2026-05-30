use crate::utils::{print_header, print_sub_header};

#[derive(Debug)]
struct User {
    first_name: Option<String>,
    last_name: Option<String>,
    email: Option<String>,
    password: Option<String>,
    is_active: bool,
    is_admin: bool,
}

impl User {
    fn new() -> User {
        User {
            first_name: None,
            last_name: None,
            email: None,
            password: None,
            is_active: true,
            is_admin: false,
        }
    }

    fn set_first_name(&mut self, first_name: &str) -> &mut Self {
        self.first_name = Some(first_name.to_string());
        self
    }

    fn set_email(&mut self, email: &str) -> &mut Self {
        self.email = Some(email.to_string());
        self
    }

    fn set_last_name(&mut self, last_name: &str) -> &mut Self {
        self.last_name = Some(last_name.to_string());
        self
    }

    fn set_password(&mut self, password: &str) -> &mut Self {
        self.password = Some(password.to_string());
        self
    }

    fn set_is_active(&mut self, is_active: bool) -> &mut Self {
        self.is_active = is_active;
        self
    }

    fn set_is_admin(&mut self, is_admin: bool) -> &mut Self {
        self.is_admin = is_admin;
        self
    }
}

pub fn test() {
    print_header("builder test");

    print_sub_header("using method syntax to create struct");

    let mut user = User::new();
    user.set_first_name("John")
        .set_email("test@test.com")
        .set_last_name("last")
        .set_password("password")
        .set_is_active(true)
        .set_is_admin(false);

    println!("user: {}", user.first_name.unwrap());
}
