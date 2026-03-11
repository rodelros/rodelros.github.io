use rand::prelude::*;

pub struct NeuralNetwork {
    weights: [f64; 2],
    bias: f64,
    learning_rate: f64,
}

impl NeuralNetwork {
    pub fn new() -> Self {
        let mut rng = rand::rng();
        let weights = [rng.random_range(0.0..1.0), rng.random_range(0.0..1.0)];

        Self {
            weights,
            bias: rng.random_range(0.0..1.0),
            learning_rate: 0.1,
        }
    }

    pub fn predict(&self, input: &[f64; 2]) -> f64 {
        let sum = input
            .iter()
            .zip(self.weights.iter())
            .map(|(i, w)| i * w)
            .sum::<f64>()
            + self.bias;

        sigmoid(sum)
    }

    pub fn train(&mut self, inputs: Vec<[f64; 2]>, outputs: Vec<f64>, epochs: usize) {
        for _ in 0..epochs {
            for (i, input) in inputs.iter().enumerate() {
                // Get a prediction for a given input
                let output = self.predict(input);

                // Compute the difference between the actual and the desired output
                let error = outputs[i] - output;

                // Find the gradient of the loss function
                // (sort of like a hint about the direction to adjust the weights in)
                let delta = derivative(output);

                // Adjust the weights and the bias to reduce error in the output
                for j in 0..self.weights.len() {
                    self.weights[j] += self.learning_rate * error * input[j] * delta;
                }

                self.bias += self.learning_rate * error * delta;
            }
        }
    }
}

fn sigmoid(x: f64) -> f64 {
    1.0 / (1.0 + (-x).exp())
}

fn derivative(x: f64) -> f64 {
    x * (1.0 - x)
}
