// Currying

// Normal function :
function sum1(a, b) {
  console.log(a + b);
}
sum1(10, 20); // Output : 30

// Example for currying :
function sum2(a) {
  return function (b) {
    console.log(a + b);
  };
}
sum2(10)(30); // Output : 40

// __________________________________________________________________________________________________________
// Interview Questions on Currying

// Question 1 : sum(2)(6)(1)

function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3));

// ______________________________________________________________________________________________________
// 4 : Write a currying fn
//       evaluate("sum")(4)(2)
//       evaluate("multiply")(4)(2)
//       evaluate("divide")(4)(2)
//       evaluate("substract")(4)(2);

function evaluate(operator) {
  return function (a) {
    return function (b){
      if (operator === "sum") {
        return a + b;
      } else if (operator === "multiply"){
        return a * b;
      } else if (operator === "divide"){
        return a / b;
      } else if(operator === "subtract"){
        return a - b;
      } else {
        return "Invalid Operator"
      }
    }
  }
}

console.log(evaluate("multiply")(4)(2))

// Another way : 
const mul = evaluate("multiply")
console.log(mul(5)(10));
console.log(mul(6)(10));

// __________________________________________________________________________________________________________________
// Question 5 : Infinite Currying -> sum(1)(2)(3)....(n)

function add(a){
  return function (b){
    if(b) return add(a + b);
    return a;
  }
}

console.log(add(5)(8)())

// ______________________________________________________________________________________________________________________________
// Question 6 : currying vs partial application

// Currying
function addition1(a){
  return function(b){
    return function(c){
      return a + b + c;
    }
  }
}
console.log(addition1(20)(2)(4))

// Partial Application
function addition2(a){
  return function(b,c){
    return a + b + c;
  }
}

console.log(addition2(20)(1,4))

// OR

const x = addition2(30);
console.log(x(5,10))

// ________________________________________________________________________________________________________________
// Question 7 : real world example of currying => Maniplating DOM

function updateText(id){
  return function(content){
    document.querySelector(`#${id}`).textContent = content;
  }
}

const newText = updateText("heading")
newText("I'm a Backend Engineer!!")

// _____________________________________________________________________________________________________________________
// Question 8 : Curry() implementation
// Convert f(a,b,c) => f(a)(b)(c)

function curry(func) { // Takes normal function
  return function curriedFunc(...args) {  // Returns curried function
      // console.log(args.length, func.length);
    if(args.length >= func.length) {
      return func(...args)
    } else {
      return function(...next) {
        return curriedFunc(...args,...next);
      };
    }
  };
}

const sum80 = (a,b,c,d) => a + b + c + d;

const totalSum = curry(sum80);
console.log(totalSum(1)(6)(5)(6))