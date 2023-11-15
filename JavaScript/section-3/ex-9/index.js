const func = (a,b, logic) => logic(a,b);

const add = (a,b) => a+b;
const multiply = (a,b) => a*b;

const result_add = func(2,3,add);
const result_multiply = func(2,4,multiply)
console.log(result_add);
console.log(result_multiply);