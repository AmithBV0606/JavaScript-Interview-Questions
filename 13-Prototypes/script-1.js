// Everything is Object in JavaScript

let obj = {
    name: "Piyush Agarwal",
    age: 25,
};

console.log(obj.__proto__); // Object.prototype

let num = 10;
// console.log(num.__proto__); // Number.prototype
// console.log(num.__proto__.__proto__); // Object.prototype

let name = "RoadsideCoder";
let bool = true;

// Inside browser's dev tool, type the above variables with (.__proto__)

// Now try the same thing with function :
function add(a, b) {
    return a + b;
}  

console.log(add(1, 2));
// console.log(add.__proto__); // Function.prototype
// console.log(add.__proto__.__proto__); // Object.prototype

// Prototype Chaining

let person = {
    name: "Piyush Agarwal",
    age: 25,
    // toString: () => {
    //     console.log("converts to string");
    // },
};

console.log(person.toString());

let additional = {
  name: "Piyush",
  username: "RoadsideCoder",
  alias: function () {
    console.log(`${this.name} is also known as ${this.username}`);
  },
};

person.__proto__ = additional;
console.log(person.alias());

// _____________________________________________________

// Prototype Inheritance

// Defined a constructor function
function Animal(name) {
    this.name = name;
}

// Add a method to the prototype of constructor function
Animal.prototype.sayName = function () {
    console.log(`My name is ${this.name}`);
}

// console.log(Animal.sayName()); // Will not work

let animalOne = new Animal("Lion");
console.log(animalOne.sayName());

//__________________ //

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log("Woof!");
}

let dogOne = new Dog("Max", "Labrador");
console.log(dogOne);
console.log(dogOne.sayName());