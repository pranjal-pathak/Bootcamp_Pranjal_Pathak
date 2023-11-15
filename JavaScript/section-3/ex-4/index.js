const operateOnArray = (array, operationFn)=>{
    return array.map(operationFn);
}

const array = [1, 2, 3, 4, 5];

const double = (num) => num*2;

const result = operateOnArray(array,double);
console.log(result);
