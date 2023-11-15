const filterAndMap = (numbers, filterFn,mapFn) =>{
    const filteredNumbers = numbers.filter(filterFn);
    const mappedNumbers = filteredNumbers.map(mapFn);
    return mappedNumbers;
}

const isOdd = number => number%2!==0;
const square = number => number*number;

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = filterAndMap(numbersArray, isOdd, square);

console.log(result);