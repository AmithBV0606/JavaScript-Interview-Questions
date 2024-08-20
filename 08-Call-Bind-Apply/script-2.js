// Call, Bind and Apply Interview Questions

// Question 1 : What is the output?

const person = { name : "Amith" }

function sayHi(age){
    return `${this.name} is ${age} old!!`
}

console.log(sayHi.call(person, 23));
console.log(sayHi.bind(person, 30)); // Returns a function which can be used later on

// _________________________________________________________________

// Question 2 :  Call with function inside an object

const age = 10;

var person1 = {
    name: "Amith",
    age: 23,
    getAge: function(){
        return this.age;
    },
};

var person2 = { age: 30 }
console.log(person1.getAge.call(person2))
console.log(person1.getAge.bind(person2)())  // will work same with Apply.

// _____________________________________________________________________

// Question 3 : What is the output?

var status = "Rich";

// setTimeout(() => {
//     const staus = "Middle-Class";

//     const data = {
//         status: "Poor",
//         getStatus(){
//             return this.status;
//         },
//     };

//     console.log(data.getStatus());
//     console.log(data.getStatus.call(this)) // In this case "this" never points to function, instead "this" points to the context of the function
// }, 0);

// __________________________________________________________________

// Question 4 : Call printAnimals such that it prints all animals in object

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

for (let index = 0; index < animals.length; index++) {
    printAnimals.call(animals[index], index)
}

// ___________________________________________________________________

// Question 5 : Append an array into another array

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

arr1.push.apply(arr1, arr2)
console.log(arr1)

// __________________________________________________________________

// Question 6 : Use apply to enhance the built-in function

// Find min/max number in an array

// Loop based algorithm
const numbers = [5,6,2,3,7]

// let min = +Infinity; // Highest possible number
// let max = -Infinity; // Least possible number

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i]
//     }

//     if (numbers[i] < min) {
//         min = numbers[i]
//     }
// }

// console.log(`Max : ${max} and Min : ${min}`)

console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers));

// ____________________________________________________________________

// Question 7 : Bound function

function f(){
    console.log(this);
}
let user = {
    g: f.bind(null),
}
user.g(); // Output = Window object

// __________________________________________________________________

// Question 8 : Bind Chaining?

function A() {
    console.log(this.name);
  }
  
B = A.bind( {name: "John"} ).bind( {name: "Ann" } );
  
B();

// There is no such thing as bind chaining

//  Once the function is bind to a particular object, it'll always be boun to that particular object

// ____________________________________________________________________

// Question 9 : Fix the code

function checkPassword1(success, failed) {
    let password = prompt("Password?", '');
    if (password == "Roadside Coder") success();
    else failed();
}
  
let user1 = {
    name: 'Piyush Agarwal',
  
    loginSuccessful() {
      console.log(`${this.name} logged in`);
    },
  
    loginFailed() {
      console.log(`${this.name} failed to log in`);
    },
  
};

// checkPassword1(user1.loginSuccessful.bind(user1), user1.loginFailed.bind(user1))

// __________________________________________________________________

// Question 10 : Partial application for login

function checkPassword2(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "Roadside Coder") ok();
    else fail();
}
  
let user2 = {
    name: 'Piyush Agarwal',
  
    login(result) {
      console.log(this.name + (result ? ' login successful' : ' login failed') );
    }
};

checkPassword2(user2.login.bind(user2, true), user2.login.bind(user2, false))

// _________________________________________________________________

// Question 11 :  Explicit Binding with Arrow Function

const age5 = 10;

var person5 = {
  name: "Piyush",
  age: 20,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var person6 = { age: 24 };
person5.getAgeArrow.call(person6);
person5.getAge.call(person6);

// Note : The arrow function regardless of being called by itself or called by call, bind and apply, we can't manipulate the context of the arrow function