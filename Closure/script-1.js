// Closures in JavaScript
// Lexical scope

// Question 1 : Lexical Scope

var username = "Roadsidecoder";
// global scope
function local() {
  // local scope
  console.log(username);
}
local();

// ______________________________________________________________________________________
// Question 2 : Closure

function makeFunc() {
  var name = "Mozilla";

  function displayName() {
    console.log(name, arguments);
  }

  return displayName;
}

// Way 1 : of calling a func
// var myFunc = makeFunc();
// myFunc();

// Way 2 :
makeFunc()(5);

//______________________________________________________________________________________
// Question 3 : Closure scope chain 

const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        console.log(a, b, c, d)
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // log 20 

// ______________________________________________________________________________________
// Question 4 : Output : What will be the logged to console?

let count = 0;
(function printCount(){
    if(count === 0){
        let count = 1; // Variable Shadowing
        console.log(count);
    }
    console.log(count);
})(); // 1 0

// _______________________________________________________________________________________
// Question 5 : Write function for this addSix() => Important

function createBase(num){

  // function tobeAdded(newNum){
  //   console.log(num + newNum)
  // }

  // return tobeAdded;

  // or

  return function (newNum){
    console.log(num + newNum)
  }
}

var addSix = createBase(6);
addSix(10) //16
addSix(21) // 27

// ________________________________________________________________________________________
// Question 6 : Time optimization using closures(Imp)

function find(){
  let a = [];

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  // Since the above loop is same for evrytime the find func is called

  return function   (index){
    console.log(a[index]);
  }
}

const closure = find()

console.time("6");
closure(6);
console.timeEnd("6");

console.time("50");
closure(50);
console.timeEnd("50");

// ________________________________________________________________________________________
// Question 7 : Block scope and setTimeout

// function a(){
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log(){
//         console.log(i);   
//     }, 1000)  
//   }
// }

// a();

// Output : 3 3 3 => This is happening because of var because var d oesn't have a block scope, var has function scope

// solution
// a) you can use "let" instead of "var", as let is block-scoped and will create a new binding  for      each iteration of the loop:

// In this case, each setTimeout callback will have its own scope and will log the correct value of i as expected.

// b) using closures
for (var i =0;i<3;i++){
  function inner(i){
    setTimeout(function(log) {  
        console.log(i)  // 3 times  3
    }, i*1000);    
  }
  inner(i);
}

// _______________________________________________________________________________________________

// Question 7 : Explaination

/* 
When "var" is used in a loop, it creates a single binding for the variable "i" that is shared across all iterations of the loop. By the time the setTimeout callbacks are executed, the loop has already completed and "i" has the value 3. 
*/

// Here’s a step-by-step breakdown of what happens:

// 1) The "for" loop runs with i taking the values `0`, `1`, and `2`.
// 2) Each iteration triggers a setTimeout callback to run after 1000 milliseconds (1 second).
// 3) By the time the setTimeout callbacks execute, the for loop has finished, and the value of "i" is 3.
// 4) Since var is function-scoped,and all setTimeout callbacks share the same i variable, they all print 3.