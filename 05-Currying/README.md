# Currying in JavaScript

### Definition : 
    It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.

#### The translation of function happens something like this,
    function simpleFunction(param1, param2, param3, .....) => function curriedFunction(param1)(param2)(param3)(....

#### Normal Function : 
```javascript
function sum(a, b) {
  console.log(a + b);
}
sum(10, 20);
```

#### Curried Function : 
```javascript
function sum(a) {
  return function (b) {
    console.log(a + b);
  };
}
sum(10)(30);
```

### Why is currying useful in JavaScript?
    - It helps us to create a higher-order function.

    - It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.

    - It is very useful in building modular and reusable code.

    - It helps us to avoid passing the same variable multiple times

    - It makes the code more readable.

# Interview Questions on Currying : 

### Question 1 : sum(2)(6)(1)
```javascript
function sum(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        }
    }
}
sum(2)(6)(1);
```

### Question 2 : Write a currying fn : evaluate("sum")(4)(2)evaluate("multiply")(4)(2) evaluate("divide")(4)(2) evaluate("substract")(4)(2) ?
```javascript
function evaluate(operatorName){
    return function(a){
        return function(b){
            if(operatorName === "sum"){
                return a + b;
            } else if(operatorName === "multiply"){
                return a * b;
            } else if(operatorName === "divide"){
                return a / b;
            } else if(operatorName === "substract"){
                return a - b;
            } else {
                return `Invalid Operator`;
            }
        }
    }
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));

// Another way : 
const mul = evaluate("multiply")
console.log(mul(5)(10));
console.log(mul(6)(10));
```

### Question 3 : Infinite Currying -> sum(1)(2)(3)....(n)
```javascript
function sum(a){
    return function(b){
        if(b){
            return sum(a + b);
        } else {
            return a;
        }
    }
}

console.log(sum(1)(2)(3)())
```

### Question 4 : Difference between currying vs partial application ?

#### Currying :
```javascript
function addition(a){
  return function(b){
    return function(c){
      return a + b + c;
    }
  }
}
console.log(addition(20)(2)(4))
```

#### Partial Application :
```javascript
function addition(a){
  return function(b,c){
    return a + b + c;
  }
}

console.log(addition(20)(1,4))

// OR

const x = addition(30);
console.log(x(5,10))
```

### Question 5 : DOM manipulation using currying ?
```javascript
function updateElementText(id){
    return function(content){
        document.querySelector(`#${id}`).textContent = content;
    }
}
const newText = updateText("heading");
newText("I'm a Backend Engineer!!");
newText("I'm a Data Engineer!!");
```

### Question 6 : Curry() implementation. Convert f(a,b,c) => f(a)(b)(c) ?[VIMP]
```javascript
function curry(func){
    return function curriedFunc(...args){
        if(func.length >= args.length){
            return func(...args);
        } else {
            return function(...next){
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum = (a,b,c,d) => a + b + c + d;

const totalSum = curry(sum);
console.log(totalSum(1)(6)(5)(6))
```