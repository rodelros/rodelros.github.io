use serde::{Deserialize, Serialize};
use std::error::Error;

#[derive(Serialize, Deserialize, Debug)]
pub struct Data {
    pub training_inputs: Vec<[f64; 2]>,
    pub training_outputs: Vec<f64>,
    pub test_inputs: Vec<[f64; 2]>,
}

pub fn get_data() -> Result<Data, Box<dyn Error>> {
    let contents = std::fs::read_to_string("./data.json")?;

    let data: Data = serde_json::from_str(&contents)?;
    Ok(data)
}
