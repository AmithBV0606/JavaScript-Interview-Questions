# Closures Interview Questions 

### Question 1 : What will be logged to console ?
```javascript
let count = 0;

(function printCount(){
    if(count === 0){
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();
```
```javascript
Output : 
1 
0
```

### Question 2 : Write a function that would allow you to do the following :
```javascript
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

#### Solution : 
```javascript
function createBase(defNum){
    return function (num){
        console.log(defNum + num);
    }
}
```

### Question 3 : Time Optimization
```javascript
function find(index){
    let a = [];
    for(let i = 0; i < 1000000; i++){
        a[i] = i * i;
    }
    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");

console.time("50");
find(50);
console.timeEnd("50");
```
```javascript
Output : 
36
6: 43.551ms
2500
50: 41.218ms
```

#### Solution : 
```javascript
function find(){
    let a = [];

    for(let i = 0; i < 1000000; i++){
        a[i] = i * i;
    }

    return function(index){
        console.log(a[index]);
    }
}

const closure = find();

console.time("6");
closure(6);
console.timeEnd("6");

console.time("50");
closure(50);
console.timeEnd("50");
```
```javascript
Output : 
36
6: 8.307ms
2500
50: 0.21ms
```

### Question 4 : Block scope and setTimeout
```javascript
// What is logged?
function a(){
    for(var i = 0; i < 3; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
}
a();
```
```
Output : The number `3` will be logged thrice, one after another.
3
3
3
```

#### Problem Explaination : 
1) `var` Keyword: The `var` keyword is `function-scoped`, not `block-scoped`. This means that the variable `i` is the same across all iterations of the loop.

2) Closure Problem: The `setTimeout` function creates a closure over the `i` variable. By the time the `setTimeout` function executes, the loop has already completed all it's iterations, and the value of `i` is 3.

3) Result: As a result, when the `setTimeout` callbacks are executed, they all refer to the same `i` variable, which is now 3. So, the console will log `3` `three` times.

#### Solution 1 : 
```javascript
function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
}
a();
```
```javascript
// Explaination :

// "let" is block-scoped, so each iteration of the loop gets its own 'i' variable. 

{
    i = 0;
}
{
    i = 1;
}
{
    i = 2;
}

// This will correctly log 0, 1, and 2.
```

#### Solution 2 :
 ```javascript
function a() {
    for (var i = 0; i < 3; i++) {
        (function(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        })(i);
    }
}
a();

// The IIFE creates a new scope for each iteration, so the correct value of i is logged each time.
```

#### Solution 3 :
```javascript
function a() {
    for (var i = 0; i < 3; i++) {

        function inner(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        };

        inner(i);
        // Everytime the inner() function is called with the arguement for "i", "i" will be the local variable inside the inner() function, rather than taking "i" from the outer scope.
    }
}
a();
```

### Summary :
    When "var" is used in a loop, it creates a single binding for the variable "i" that is shared across all iterations of the loop. By the time the setTimeout callbacks are executed, the loop has already completed and "i" has the value 3. 

    Here’s a step-by-step breakdown of what happens:

    1) The `for` loop runs with `i` taking the values `0`, `1`, and `2`.

    2) Each iteration triggers a `setTimeout` callback to run after (i * 1000) milliseconds i.e after 0, 1 and 2 seconds.

    3) By the time the `setTimeout` callbacks execute, the for loop has finished, and the value of `i` is 3.

    4) Since `var` is function-scoped,and all setTimeout callbacks share the same i variable, they all print 3.

### Question 5 : How would you use a closure to create a private counter ?
```javascript
function counter(){
    var _counter = 0;

    function add(increment){
        _counter += increment;
    }

    function retrive(){
        return "Counter = " + _counter;
    }

    return {
        add,
        retrive,
    };
}

const c = counter(); // Private Counter
c.add(10);
c.add(20);
console.log(c.retrive());
```

### Question 6 : What is Module Pattern ?
```javascript
var Module = (function(){
    function privateMethod(){
        // Do Something
        console.log("Private");
    }

    return {
        publicMethod: function () {
            // Can call privateMethod
            console.log("Public");
        }
    }
})();
Module.publicMethod();
// Module.privateMethod() // Will throw error

// There is no way to directly access privateMethod function
```

### Question 7 : Make this run only once.
```javascript
let view;
function likeTheVideo(){
    view = "Roadside Coder";
    console.log("Subscribe to ", view)
}

likeTheVideo();
likeTheVideo();
likeTheVideo();
```

#### Solution : 
```javascript
function likeTheVideo(view){
    let callCount = 0;

    return function (){
        if(callCount > 0){
            console.log("Already subscribed to ", view)
        } else {
            console.log("Subscribe to ", view);
            callCount++;
        }
    }
}

let isSubscribed = likeTheVideo("Roadside Coder");
isSubscribed();
isSubscribed();
```

### Question 8 : Once Polyfill
```javascript
function once(func, context){
    let ran;

    return function () {
        if(func){
            ran = func.apply(context || this, arguments);
            func = null;
        }

        return ran;
    }
}

const hello = once(() => console.log("Hello!!!"));
hello();
hello();
hello();
hello();
hello();

// No matter how many times we call hello() function, it will only be called once
```

### Question 9 : Memoize polyfill

#### Problem : 
```javascript
const clumsyProduct = (num1, num2) => {
    for(let i = 1; i <= 100000000; i++) {}

    return num1 * num2
}

console.time("First call");
console.log(clumsyProduct(9467,7649));
console.timeEnd("First call");

console.time("Second call");
console.log(clumsyProduct(9467,7649));
console.timeEnd("Second call");
```

```javascript
72413083
First call: 76.289ms

72413083
Second call: 87.706ms
```

#### Solution : Caching the result of the previous function.
```javascript
function myMemoize(fn, context){
    const res = {}; // Cache

    return function (...args) {
        const argsCache = JSON.stringify(args);

        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        } 

        return res[argsCache];
    }
}

const clumsyProduct = (num1, num2) => {
    for(let i = 1; i <= 100000000; i++) {}

    return num1 * num2
}

const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumzyProduct(9467,7649));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumzyProduct(9467,7649));
console.timeEnd("Second call");
```

```javascript
72413083
First call: 122.528ms

72413083
Second call: 0.094ms
```

### Question 10 : Difference between Scope and Closure ?

#### Scope : 
    - Describes the context of the variable access.

    - The Variables in a scope have limited lifetime.

    - The Variables within a scope are accessible within that scope.

    - Helps prevent variable naming conflicts and provides structured access to variables within the function or block.

#### Closure : 
    - Refers to ability of function to remember and access its lexical scope.

    - The Variables accessed via closures can persist beyond the lifetime of containing function.

    - The Closures allow access to variables from their containing function even after that function has exited.

    - Useful for the creating private data maintaining state and implementing advanced patterns like currying and memoization.