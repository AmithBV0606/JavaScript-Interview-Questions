// Continuation from the Most asked Interview Questions README.md file

// Promise polyfill implementation 

// Function-Flow(FF)

// Stage - 1 : Asynchronous part 
// function PromisePolyFill(executor){
//     let onResolve, onReject; //FF-1

//     function resolve(value){ //FF-5
//         onResolve(value);
//     }

//     function reject(value){ // FF-6
//         onReject(value)
//     }

//     this.then = function(callback){ // FF-2
//         onResolve = callback;
//         return this;
//     }

//     this.catch = function(callback){ //FF-3
//         onReject = callback;
//         return this;
//     }

//     executor(resolve, reject); //FF-4
// }

// Satge - 2 : Synchronous part
function PromisePolyFill(executor){
    let onResolve, 
        onReject,
        isFulfilled = false,
        isRejected = false,
        isCalled = false,
        value;

    function resolve(val){ 
        isFulfilled = true;
        value = val;

        if (typeof onResolve === 'function') {
            onResolve(val);
            isCalled = true;            
        }
    }

    function reject(val){ 
        isRejected = true;
        value = val;

        if (typeof onReject === "function") {
            onReject(val)
            called = true;
        }
    }

    this.then = function(callback){ 
        onResolve = callback;

        if (isFulfilled && !isCalled) {
            called = true;
            onResolve(value)
        }

        return this;
    }

    this.catch = function(callback){ 
        onReject = callback;

        if (isRejected && !isCalled) {
            isCalled = true;
            onResolve(value);
        }

        return this;
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        reject(5);
    }, 2000);
});

examplePromise
.then((res) => {
    console.log(res);
})
.catch((err) => console.error(err));

// For individual resolve :
PromisePolyFill.resolve = (val) => {
    return new PromisePolyFill(function executor(resolve, reject){
        resolve(val)
    })
}

// For individual reject : 
PromisePolyFill.reject = (val) => {
    return new PromisePolyFill(function executor(resolve, reject){
        reject(val)
    })
}