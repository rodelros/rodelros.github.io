// traits/tests/traits_tests.rs
use basics::utils::{print_header, print_sub_header};
use traits::implementations::{news_article::NewsArticle, blog_post::BlogPost};  // Import the implementations
use traits::traits::summary::Summary;  // Import the `Summary` trait


#[test]
pub fn traits_test_works(){
    print_header("traits test");
    
    print_sub_header("create two implementations of summary");
    let news_article = NewsArticle {
        headline: String::from("headline"),
        location: String::from("location"),
        author: String::from("author"),
        content: String::from("content"),
    };

    let blog_post = BlogPost {
        headline: String::from("headline"),
        location: String::from("location"),
        author: String::from("author"),
        content: String::from("content"),
    };

    print_sub_header("call summarize on both");
    let _news_summary = Summary::summarize(&news_article);
    let _blog_summary = Summary::summarize(&blog_post);

    println!("news_summary: {}\nblog_summary: {}", _news_summary, _blog_summary);
}