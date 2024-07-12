// FUNCTION Interview Questions

// Question 1 : Function Code

// Sub Questions :
// Quetion 1.1 : What is function declaration?
// Quetion 1.2 : What is function expression?
// Quetion 1.3 : What is first class function?

function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is " + fn(5));
}

displaySquare(square);

// _________________________________________________________________________________________________

// Question 2 :  What is IIFE?

// Eg-1
(function square(num) {
  console.log(num * num);
})(7);

// Eg-2
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1); // Output : 1

// _________________________________________________________________________________________________

// Question 3 : Closure

function init() {
  var name = "Mozilla"; // name is a local variable created by init

  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }

  displayName();
}

init();

// _________________________________________________________________________________________________

// Question 4 : Function Scope

// Q-1
var num1 = 20, num2 = 3, name = "Roadsidecoder";

function mul() {
  return num1 * num2;
}

console.log(mul()); // Returns 60

function getScore() {
  var num1 = 3,
    num2 = 4;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

console.log(getScore()); // Roadside coder scored 7


// Q-2
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// _________________________________________________________________________________________________

// Question 5 : Function Hoisting

// Without Hoisting:
function functionName1() {
    console.log("work at tech - 1");
}

functionName1();         // function is called after declaring it

// With Hoisting:
functionName2();        // function is called before declaring it

function functionName2() {
    console.log("work at tech - 2");
}

// Hoisting with variables
console.log(c)
var c = 10;

// Output 
var x = 21;

var fun = function () {
    console.log(x);
    var x = 20;
};
 
fun();

// _________________________________________________________________________________________________

// Question 6 :  Params vs arguments

const fn = (...numbers) => { // Parameters
  console.log(numbers[0] * numbers[1] * numbers[2])
};
fn(5,6,7,8); // Arguements

// _________________________________________________________________________________________________

// Question 7 : Spread operator and rest operator
function multiply(...nums){  // rest operator ,should always be the last one
  console.log(nums[0]*nums[1]);
}
var arr = [5,7];
multiply(...arr) // Spread operator

// O/P based questions
// const fnn = (a, ...number, x, y) => {
//   console.log(x, y)
// }
// var arr = [1,2,3,4,5,6,7,8,9,10]
// fnn(21, ...arr, 50, 100) // SyntaxError: Rest parameter must be last formal parameter

// ______________________________________________________________________________________________________

// Question 8 : Callback

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

// processUserInput(greeting);

// ______________________________________________________________________________________________________

// Question 9 : Arrow functions

const add = (firstNum, secondNum) => {
  return firstNum + secondNum;
}

// ______________________________________________________________________________________________________

// Question 10 : this

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