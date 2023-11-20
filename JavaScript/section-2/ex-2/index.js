// Original array
let originalArray = [1, 2, 3, 4, 5, 6, 8, 7, 9];

// // Arrays for even and odd indices
// newFunction();
// function newFunction() {
//   let evenIndexArray = [];
//   let oddIndexArray = [];

//   // Separating elements based on index
//   originalArray.forEach((index) => {
//     if (originalArray[index] % 2 === 0) {
//       // Even index
//       evenIndexArray.push(originalArray[index]);
//     } else {
//       // Odd index
//       oddIndexArray.push(originalArray[index]);
//     }
//   });

//   // Logging the results
//   console.log("Original Array:", originalArray);
//   console.log("Even  Array:", evenIndexArray);
//   console.log("Odd  Array:", oddIndexArray);
// }


const separateArrays=(originalArray)=>{
  const evenIndexArray = originalArray.filter((element,index) => index%2==0);
  const oddIndexArray = originalArray.filter((element,index) => index%2!==0);
  return [oddIndexArray,evenIndexArray];
}

const[oddIndexArray,evenIndexArray] = separateArrays(originalArray);

console.log(evenIndexArray);
console.log(oddIndexArray);
