const compose = (f, g) => (x) => f(g(x));

// Example functions
const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

// Creating a composed function
const composedFunction = compose(addTwo, multiplyByThree);

// Using the composed function
const result = composedFunction(5);

// Logging the result
console.log(result); // Output: (5 * 3) + 2 = 17




