pub fn run() {
    println!("\n==  Chapter 8 : Common Collections ==");
    vectors();
    hash_map();
}

fn vectors() {
    let mut v:Vec<i32> = Vec::new();
    v.push(6);
    v.push(4);

    let third = v.get(3);
    match third {
        Some(third) => println!("{third}"),
        None => println!("There is no element at that index.")
    }

    let second = &v[1];
    println!("The second element is {second}");


    let v2 = vec!['a', 'b', 'd'];

    for i in &v2 {
        println!("{i}");
    }

    let mut v3 = vec![2, 4, 6, 8];
    for i in &mut v3 {
        *i = *i + 1;
    }

    for i in v3 {
        println!("{i}");
    }

    let v4 = vec![10, 20, 30];

    println!("\n-- v4 --");
    for i in &v4 {
        print!("{i}  ");
    }
    println!("");

    display(&v4);
    
}

fn display(v: &Vec<i32>) {
    println!("\n-- display --");
    for (i, val) in v.iter().enumerate() {
        println!("{i} - {val}");
    }
}

fn hash_map() {
    println!("\n-- Hash Map --");
}


