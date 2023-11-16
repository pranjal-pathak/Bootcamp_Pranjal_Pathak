const memoize = (fib)=>{
    const cache = {};
    return (n)=>{
        const cacheKey = JSON.stringify(n);
        if(cache.cacheKey){
            return cache.cacheKey
        }
        const result = fib(n);
        cache.cacheKey = result;
        return result;
    }
}
const fib = (n)=>{
    if(n==0|n==1)return n
    return fib(n-1)+fib(n-2);
}
const memoizedFib  = memoize(fib);
const result = memoizedFib(7);
console.log(result);


















