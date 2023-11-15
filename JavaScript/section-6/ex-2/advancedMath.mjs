// advancedMath.js

// Import functions from the mathOperations module
import * as mathOperations from "./mathOperations.mjs";

// Function to perform advanced math operations
export const performAdvancedMath = (a, b) => {
  console.log(`Addition: ${a} + ${b} = ${mathOperations.add(a, b)}`);
  console.log(`Subtraction: ${a} - ${b} = ${mathOperations.subtract(a, b)}`);
  console.log(`Multiplication: ${a} * ${b} = ${mathOperations.multiply(a, b)}`);

  try {
    console.log(`Division: ${a} / ${b} = ${mathOperations.divide(a, b)}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }

  console.log(`Square Root of ${a}: ${mathOperations.squareRoot(a)}`);
  console.log(`Square Root of ${b}: ${mathOperations.squareRoot(b)}`);
};
