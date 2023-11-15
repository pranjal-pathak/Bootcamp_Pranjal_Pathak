// main.js

// Import the mathOperations module
import * as mathOperations from "./mathOperations.mjs";

// Example usage
const a = 10;
const b = 5;

// Perform arithmetic operations using the imported module
console.log(`Addition: ${a} + ${b} = ${mathOperations.add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${mathOperations.subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${mathOperations.multiply(a, b)}`);

try {
  console.log(`Division: ${a} / ${b} = ${mathOperations.divide(a, b)}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
