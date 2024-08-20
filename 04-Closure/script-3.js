// Question 10 : once Polyfill 
function once(func, context){
    let ran;

    return function(){
        if (func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }

        return ran;
    }
}

const hello = once(() => console.log("Hello"))

hello();
hello();
hello();

// _________________________________________________________________________________________
// Question 11 : Memoize Polyfill  

const clumsySquare = (num1, num2) => {
    for(let i = 1; i <= 100000000; i++) {}

    return num1 * num2
}

// console.time("First call")
// console.log(clumsySquare(9467,7649))
// console.timeEnd("First call")

// In order to reduce the time, we can cache the result of the expensive calculation (for loop in the above case)

function myMemoize(fn, context){
    const result = {}; // Cache for storing the result of previously executed function

    return function (...args){
        const argsCache = JSON.stringify(args);

        if (!result[argsCache]) {
            result[argsCache] = fn.call(context || this, ...args)
        }

        return result[argsCache]
    }
}

const memoizedProduct = myMemoize(clumsySquare);

console.time("First call")
console.log(memoizedProduct(9467,7649))
console.timeEnd("First call")

console.time("Second call")
console.log(memoizedProduct(9467,7649))
console.timeEnd("Second call")