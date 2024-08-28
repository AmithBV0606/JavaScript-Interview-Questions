// Compose and Pipe

// COMPOSE : 
const addFive = (num) => {
    return num + 5;
};
  
const subtractTwo = (num) => {
    return num - 2;
};
  
const multiplyFour = (num) => {
    return num * 4;
};

// Now create a function named compose such that it takes the function ref as arguments and returns another function and stor it in a variable, so that it can be called latter

// After calling that variable, for example if we pass 5 to that function, it should return 23

// The calculation goes like this, multiplyFour function will return (5*4=20) to subtractTwo func as argument, (20-2=18). Thena again 18 will be passed on to addFive func where 18+5 = 23 will be returned. 

// Using normal way without using inbuilt functions : 

// function compose(...fns) {
//     return function (init) {
//         let result = init;
//         for (let i = fns.length - 1; i >= 0; i--) {
//             result = fns[i](result)
//         }
//         return result;
//     }
// }

// Using reducer

function compose(...fns){
    return function (init) {
        return fns.reduceRight((acc, curr) => {
            return curr(acc);
        }, init)
    }
}

const evaluateCompose = compose(addFive, subtractTwo, multiplyFour);
console.log("Compose : ", evaluateCompose(6));

// PIPE : 

// Using normal way without using inbuilt functions : 

// function pipe(...fns) {
//     return function (init) {
//         let result = init;
//         for (let i = 0; i < fns.length; i++) {
//             result = fns[i](result)
//         }
//         return result;
//     }
// }

// Using reducer

function pipe(...fns){
    return function (init) {
        return fns.reduce((acc, curr) => {
            return curr(acc);
        }, init)
    }
}


const evaluatePipe = pipe(addFive, subtractTwo, multiplyFour);
console.log("Pipe : ", evaluatePipe(6));