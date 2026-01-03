use basics::age_plus_one;

#[test]
pub fn age_plus_one_works(){
    let age = 40;
    assert_eq!(age_plus_one(age), 41);
}
