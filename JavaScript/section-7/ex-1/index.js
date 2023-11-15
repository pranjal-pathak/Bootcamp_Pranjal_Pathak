// Fibonacci function
function fibonacci(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Fibonacci function with recursion and caching (fib1)
function fib1(n, memo = {}) {
  if (n <= 1) {
    return 1;
  }

  if (!memo[n]) {
    memo[n] = fib1(n - 1, memo) + fib1(n - 2, memo);
  }

  return memo[n];
}

// Fibonacci function with recursion and caching (fib2)
function fib2(n, memo = {}) {
  if (n <= 1) {
    return 1;
  }

  if (!(n in memo)) {
    memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  }

  return memo[n];
}

// Fibonacci function with recursion and caching (fib3)
function fib3(n, memo = {}) {
  if (n <= 1) {
    return 1;
  }

  return memo[n] || (memo[n] = fib3(n - 1, memo) + fib3(n - 2, memo));
}

// Timing function
function timeFunctionExecution(func, args) {
  const startTime = process.hrtime();
  const result = func(...args);
  const endTime = process.hrtime(startTime);
  const executionTime = endTime[0] * 1000 + endTime[1] / 1e6;

  return { result, executionTime };
}

// Program to use Fibonacci functions and measure time
const n = parseInt(process.argv[2]) ; // Take a number from the command line or use 10 as default

console.log(`Calculating Fibonacci(${n}) using basic recursion:`);
const { result: fibResult1, executionTime: fibTime1 } = timeFunctionExecution(
  fibonacci,
  [n]
);
console.log(`Result: ${fibResult1}, Time: ${fibTime1.toFixed(3)}ms\n`);

console.log(`Calculating Fibonacci(${n}) using recursion and caching (fib1):`);
const { result: fibResult2, executionTime: fibTime2 } = timeFunctionExecution(
  fib1,
  [n]
);
console.log(`Result: ${fibResult2}, Time: ${fibTime2.toFixed(3)}ms\n`);

console.log(`Calculating Fibonacci(${n}) using recursion and caching (fib2):`);
const { result: fibResult3, executionTime: fibTime3 } = timeFunctionExecution(
  fib2,
  [n]
);
console.log(`Result: ${fibResult3}, Time: ${fibTime3.toFixed(3)}ms\n`);

console.log(`Calculating Fibonacci(${n}) using recursion and caching (fib3):`);
const { result: fibResult4, executionTime: fibTime4 } = timeFunctionExecution(
  fib3,
  [n]
);
console.log(`Result: ${fibResult4}, Time: ${fibTime4.toFixed(3)}ms`);
