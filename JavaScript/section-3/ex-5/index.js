const curry = (additionFn)=>(x)=>(y)=>additionFn(x,y);

const additionFn = (a,b)=>a+b;

const helper = curry(additionFn);

const addFive = helper(5);
const result = addFive(3);

console.log(result);
