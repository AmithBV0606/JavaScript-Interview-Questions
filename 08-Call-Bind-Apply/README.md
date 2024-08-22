# Call, Bind and Apply in JavaScript

    Manipulating the context of the function with the help of call, bind and Apply

### Question 1 : What is call? 
    - With call(), an object can use a method belonging to another object.

    - "Call is a function that helps you change the context of the invoking function" => Most precise definition.

    - "call is a function that you use to change the value of this inside a function and execute it with the arguments provided"

### Example : 
```javascript
var obj = { name: "Amith" }

function sayHello(age){
    return "Hello " + this.name + ", You are " + age + " years old!!";
}

console.log(sayHello.call(obj, 23));
```
Note : Call method is available for all the functions in javascript

### Question 2 : What is Apply?
    Apply is very similar to the call function. The only difference is that in apply you have to pass an array as argument.

```javascript
var obj = { name: "Amith" }

function about(age, profession){
    return "Hello " + this.name + " you are " + age + " and you are a " + profession;
}

console.log(about.apply(obj, [23, "Software Engineer"]))
```

### Question 3 : What is Bind?
    Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

```javascript

var obj = { name: "Amith" }

function info(age, profession){
    return "Hello " + this.name + " you are " + age + " and you are a " + profession;
}

const bindFunc = info.bind(obj);
// The bind() method returns a new reusable function.

console.log(bindFunc(30, "SWE-III @ Google"))
console.log(bindFunc(30, "SWE-III @ Netflix"))
// and when that new function is called it set "this" keyword to the first argument(obj), which is passed to the bind method.

// if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.
```

### Question 4 : What is the output ?
```javascript
const person = { name : "Amith" }

function sayHi(age){
    return `${this.name} is ${age} old!!`
}

console.log(sayHi.call(person, 23)); // Amith is 23 old!!
console.log(sayHi.bind(person, 30)); // Returns a function
```

### Question 5 :  Call with function inside an object
```javascript
const age = 10;

var person1 = {
    name: "Amith",
    age: 23,
    getAge: function(){
        return this.age;
    },
};

var person2 = { age: 30 }
console.log(person1.getAge.call(person2)); // 30
console.log(person1.getAge.bind(person2)()) ; // 30
```

### Question 6 : What is the output ?
```javascript
var status = "Rich";

setTimeout(() => {
    const staus = "Middle-Class";

    const data = {
        status: "Poor",
        getStatus(){
            return this.status;
        },
    };

    console.log(data.getStatus());
    console.log(data.getStatus.call(this)); 
    // In this case "this" never points to function, instead "this" points to the context of the function.
}, 0);

// Output : Inside browser's console
// Poor
// Rich

// Poor and undefined in node environment
```

### Question 7 : Call printAnimals such that it prints all animals in object
```javascript
const animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Queen' }
];
  
function printAnimals(i) {
    this.print = function() {
    console.log('#' + i + ' ' + this.species + ': ' + this.name);
    }
    this.print();
}

for(let i = 0; i < animals.length; i++){
    printAnimals.call(animals[i], i);
}
```

### Question 8 : Append an array into another array ?
```javascript
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

arr1.push.apply(arr1, arr2);
console.log(arr1);
```

### Question 9 : Use apply to enhance the built-in function. Find min/max number in an array
```javascript
const numbers = [5,6,2,3,7];

console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers));
```

```javascript
// Loop based algorithm
const numbers = [5,6,2,3,7]

let min = +Infinity; // Highest possible number
let max = -Infinity; // Least possible number

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]
    }

    if (numbers[i] < min) {
        min = numbers[i]
    }
}

console.log(`Max : ${max} and Min : ${min}`)
```

### Question 10 : Bound function
```javascript
function f(){
    console.log(this);
}
let user = {
    g: f.bind(null),
}
user.g();

// Output : Window object
```

### Question 11 : Bind Chaining ?
```javascript
function A() {
    console.log(this.name);
  }
  
B = A.bind( {name: "John"} ).bind( {name: "Ann" } );
  
B(); // Jhon

// There is no such thing as bind chaining

//  Once the function is bind to a particular object, it'll always be boun to that particular object
```

### Question 12 : Fix the code
```javascript
function checkPassword(success, failed) {
    let password = prompt("Password?", '');
    if (password == "Roadside Coder") success();
    else failed();
}
  
let user = {
    name: 'Piyush Agarwal',
  
    loginSuccessful() {
      console.log(`${this.name} logged in`);
    },
  
    loginFailed() {
      console.log(`${this.name} failed to log in`);
    },
};

// checkPassword(user.loginSuccessful, user.loginFailed);

// Solution
checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));
```

### Question 13 : Partial application for login
```javascript
function checkPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "Roadside Coder") ok();
    else fail();
}
  
let user = {
    name: 'Piyush Agarwal',
  
    login(result) {
      console.log(this.name + (result ? ' login successful' : ' login failed') );
    }
};

// checkPassword(?, ?)

checkPassword(user.login.bind(user, true), user.login.bind(user, false));
```

### Question 14 :  Explicit Binding with Arrow Function
```javascript
const age = 10;

var person = {
  name: "Piyush",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };
person.getAgeArrow.call(person2); // undefined
person.getAge.call(person2); //24

// Note : The arrow function regardless of being called by itself or called by call, bind and apply, we can't manipulate the context of the arrow function
```

### Question 15 : Polyfill for call method ?
```javascript
Function.prtotype.myCall = function(context = {}, ...args){
    // to check if the thing we're calling myCall on is a function or not
    if(typeof this !== "function"){ 
        throw new Error(this + "It's not callable");
    }

    context.fn = this;
    context.fn(...args)
}
```

### Question 16 : Polyfill for Apply method ?
```javascript
Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== "function"){ 
        throw new Error(this + "It's not callable");
    }

    if(!Array.isArray(args)){
        throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    context.fn = this;
    context.fn(...args);
}
```

### Question 17 : Polyfill for bind method?
```javascript
Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== "function"){ 
        throw new Error(this + "cannot be bound as it's not callable");
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
}
```