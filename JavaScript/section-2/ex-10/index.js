// Array of numbers
const numbers = [1, -2, 3, -4, 5, -6];

// // Find the sum of all positive numbers
// const sumOfPositives = numbers.reduce((sum, number) => {
//   if (number > 0) {
//     return sum + number;
//   }
//   return sum;
// }, 0);

// // Logging the result
// console.log(sumOfPositives);


const sum = numbers.reduce((acc,num)=>{
    if(num>0)
    {
      acc+=num;
    }
    return acc;
},0);

console.log(sum);

