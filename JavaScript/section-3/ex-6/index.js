const sortNumbers = (numbers, compareFn) =>{
    return numbers.slice().sort(compareFn);
}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const ascendingOrder = (a,b) => a-b;

const result = sortNumbers(numbers, ascendingOrder);

console.log(result);