const composeWithReduce = (functions) => {
  return (x) => functions.reduce((result, func) => func(result),x)
};

// Example usage:
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;
const square = (x) => x ** 2;

const composedFunction = composeWithReduce([addTwo, multiplyByThree, square]);

// Using the composed function
const result = composedFunction(3);

// Logging the result
console.log(result); // Output: ((3 + 2) * 3) ** 2 = 225
