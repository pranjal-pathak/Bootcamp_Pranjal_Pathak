const multiplyBy = (x) => {
  return (y) => x * y;
};

// Example usage
const multiplyByTwo = multiplyBy(2);
const result = multiplyByTwo(5);

// Logging the result
console.log(result); // Output: 10
