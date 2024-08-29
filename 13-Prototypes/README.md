# ProtoTypes

### Log the below given code :
```javascript
let obj = {
    name: "Piyush Agarwal",
    age: 25,
};

console.log(obj.__proto__);
```
```javascript
let num = 10;
// console.log(num.__proto__); // Number.prototype
// console.log(num.__proto__.__proto__); // Object.prototype

let name = "RoadsideCoder";
let bool = true;
```

### Now try the same thing with function :
```javascript
function add(a, b) {
    return a + b;
}  

console.log(add(1, 2));
// console.log(add.__proto__); // Function.prototype
// console.log(add.__proto__.__proto__); // Object.prototype
```

## Prototype Chaining : 
If any key is not found in Object, the control enters the prototype of that object and searches there.
```javascript
let person = {
    name: "Piyush Agarwal",
    age: 25,
    // toString: () => {
    //     console.log("converts to string");
    // },
};

console.log(person.toString()); // [Object, Object]

// NOTE : if we uncomment toString object method, the output for logging "person.toString()" would be "converts to string".
```

### Another example : 
```javascript
let additional = {
  name: "Piyush",
  username: "RoadsideCoder",
  alias: function () {
    console.log(`${this.name} is also known as ${this.username}`);
  },
};

person.__proto__ = additional;
console.log(person.alias()); // Piyush Agarwal is also known as RoadsideCoder
```

## Prototype Inheritance : 
```javascript
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
```
```javascript
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
```

#### This is how a polyfill is created : 
```javascript
Array.prototype.myArr = function () {
    console.log("This is my array ", + this);
}

const arr = [1,2,3];
console.log(arr.myArr())
```

# Interview Questions on Prototypes 

### Question 1 : What will be the output of the following code?
```javascript
function Vehicle() {}
Vehicle.prototype.drive = function () {
  console.log("Driving a vehicle");
};

function Car() {}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.drive = function () {
  console.log("Driving a car");
};

var vehicle = new Vehicle();
var car = new Car();

vehicle.drive();
car.drive(); 
// console.log(car);

// Output : 
// Driving a Vehicle
// Driving a Car
```

### Question 2 : Explain the difference between  __proto__ and prototype in JavaScript ?

- **`__proto__`**: It is an object property that points to the prototype of the object.

- It is used for inheritance and allows accessing the prototype chain.

- **`prototype`**: It is a property that exists on constructor functions and is used to

- set up inheritance for objects created by that constructor function.

- It defines properties and methods shared by all instances created by that constructor function.

### Question 3 : What is setPrototypeOf?
```javascript
// Define a prototype object
var animalPrototype = {
    sound: function () {
      console.log("Making a sound...");
    },
};
  
// Create an object with animalPrototype as its prototype
  var dog = Object.create(animalPrototype);
  
// Create another object with a different prototype
var cat = {
    purr: function () {
      console.log("Purring...");
    },
};
  
// To replace the prototype of Dog, with the prototype of cat
Object.setPrototypeOf(dog, cat);
dog.purr(); // Output: Purring...
```

### Question 4 : What is instanceof?
```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.sayName = function () {
    console.log("My name is " + this.name);
};
  
var animal1 = new Animal("Tiger");
  
function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}
  
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
};
  
var dog1 = new Dog("Max", "Labrador");
  
console.log(dog1 instanceof Animal); //true
```

### Question 5 :  How can you create an object without a prototype in JavaScript?
```javascript
var obj1 = Object.create(null);
console.log(obj1.toString());
```

### Question 6 : What will be the output of the following code?
```javascript
function A() {}
A.prototype.foo = 10;

function B() {}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.foo = 20;

function C() {}
C.prototype = Object.create(B.prototype);
C.prototype.constructor = C;
C.prototype.foo = 30;

var obj1 = new A();
var obj2 = new B();
var obj3 = new C();

console.log(obj1.foo); 
console.log(obj2.foo);
console.log(obj3.foo);

// Output : 
// 10
// 20
// 30
```

### Question 7: Deep Clone an object in JS ?
```javascript
function deepClone(obj) {
    // Handle null and non-object types
    if (obj === null || typeof obj != "object") {
        return obj;
    }

    // Create a new object or array based on the type of the input object
    var clone = Array.isArray(obj) ? [] : {};

    // Iterate through each key in the input object
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}
  
var obj4 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};
  
var clonedObj = deepClone(obj4);
clonedObj.b.c = 3;
```