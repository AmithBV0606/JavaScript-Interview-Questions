# Functions in Javascript

    - A JavaScript function is a block of code designed to perform a particular task.

    - A JavaScript function is executed when "something" invokes it (calls it).

### Question 1 : What is function declaration?
```javascript
function square(num) {
  return num * num;
}

// This can also be called function definition or function statement.
```

### Question 2 : What is function expression?

    - When a function is stored inside of a variable is called function expression.

```javascript
const square = function (num) {
    return num * num;
}

// A nameless function is called an Anonymous function.

// An anonymous function can be assigned to a variable or passed as callback.
```

### Question 3 : What is first class function?

    - In a languge where a function can be treated just like any other variable, their function is called first class functions.

    - In these cases functions can be passed into the other functions,can be used, manipulated and returned from those functions.

    - Basically everything a variable can do, can also be done by the functions.

```javascript
function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is " + fn(5));
}

displaySquare(square);
```

### Question 4 : What is IIFE?

    - IIFE = Immediately Invoked Function Expression.

    -  It is a function that runs the very moment it is invoked or called in the JavaScript event loop.

```javascript
(function square(num){
    console.log(num * num);
})(5)
```

### Question 5 : IIFE - O/P based Question?
```javascript
// Question :
(function (x){
    return (function (y) {
        console.log(x);
    })(2)
})(1)

// Output = 1
```

### Question 6 : Function Scope
```javascript
var num1 = 20, num2 = 3, name = "Roadsidecoder";

function mul() {
  return num1 * num2;
}

console.log(mul()); // Returns 60
```
```javascript
// Nested function : 
function getScore() {
  var num1 = 3,
    num2 = 4;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

console.log(getScore()); // Roadside coder scored 7
```

### Question 7 : Function Scope - O/P Based Question?
```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// Since we've used "let", every time the "for" loop runs, it creates another block scope for this function.

// If we would've used "var", which has functional scope, would have printed the nuber "5", five times.
```

### Question 8 : Function Hiosting
```javascript
functionName2();

function functionName2() {
    console.log("work at tech - 2");
}
```

### Question 9 : Function Hiosting - O/P Based Question?
```javascript
var x = 21;

var fun = function () {
    console.log(x);
    var x = 20;
};
 
fun(); 
// Output - Undefined

// When we have a variable present in a scope, we will not go and check the global scope, we always refer to the current scope.
```

### Question 10 : Params vs Arguements
```javascript
const fn = (...numbers) => { // Parameters
  console.log(numbers[0] * numbers[1] * numbers[2])
};

fn(5,6,7,8); // Arguements
```

### Question 11 : Spread operator and rest operator
```javascript
// Spread Operator
function multiply(num1, num2){ 
  console.log(num1 * num2);
}

var arr = [5,7];
multiply(...arr) // Output - 35
```

```javascript
// Rest Operator
function multiply(...nums){ 
  console.log(nums);
  console.log(nums[0] * nums[1]);
}

var arr = [5,7];
multiply(...arr)
// Output - [5, 7] and 35
```

### Question 12 : Spread and rest operator - O/P Based Question?
```javascript
const fnn = (a, ...number, x, y) => {
  console.log(x, y)
}

var arr = [1,2,3,4,5,6,7,8,9,10];
fnn(21, ...arr, 50, 100);
// Output - Error : Rest parameter must be last formal parameter.
```

```javascript
// Correct Way :
const fnn = (a, x, y, ...number) => {
  console.log(a, x, y, number)
}

var arr = [1,2,3,4,5,6,7,8,9,10];
fnn(21, 50, 100, ...arr);
```

### Question 13 : Callback Fuction

    - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

### Question 14 : Arrow Function
```javascript
const add = (firstNum, secondNum) => {
  return firstNum + secondNum;
}

console.log(add(1, 2));
```

### Question 15 : Difference between Normal Function and Arrow Function ?
```javascript
// Difference 1 - Syntax

// Normal Function
function square(num){
  return num * num;
}

// Arrow Function
const cube = (num) => {
  return num * num * num;
}
```

```javascript
// Difference 2 - Implicit "return" keyword

// Arrow Function
const cube = (num) => num * num * num;

// Normal Function
// Implicit return is NOT POSSIBLE.
```

```javascript
// Difference 3 - Arguements

// Normal Function
function fn(){
  console.log(arguments);
}

fn(1,2,3,4)

// Arrow Function
const fn = () => {
  console.log(arguments);
}

fn(1,2,3,4)
// This is not possible in Arrow function
// Error : arguements is not defined
```

```javascript
// Difference 4 - "this" keyword
let user = {
  name: "Roadside Coder",
  rc1: () => {
    console.log("Subscribe to " + this.name);
  },
  rc2() {
    console.log("Subscribe to " + this.name);
  },
};

user.rc1();
user.rc2();
```