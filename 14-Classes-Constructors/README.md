# Classes and Constructors

### Classes :
    A class is a blueprint that defines the structure and behavior of objects. Introduced in ES6 version of JavaScript.

### Constructor method :
    A method which is used to initialize the properties for a function or for a class.

    Since class doen't takes any input, so we need a constructor function that takes some input form the user and binds those input variables to the class.

__Example__:
```javascript
class Teacher {
  constructor(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this.videoLikes = likes;
  }

  intro() {
    return `Hey, Its ${this.name}! Welcome to ${this.channel}`;
  }

  like() {
    this.videoLikes++;
    return `Liked this video! Current likes: ${this.videoLikes}`;
  }
}
```

### Object :
    Objects are instances of classes that possess properties and methods defined by the class.

__Example__:
```javascript
const roadsidecoder = new Teacher("Piyush", "RoadsideCoder");
```

### Converting the above class based constructor to Function Constructors
```javascript
function Teacher(name, channel, likes=0){
    this.name = name;
    this.channel = channel;
    this.videoLikes = likes;
}

Teacher.prototype.intro = function(){
    return `Hey, Its ${this.name}! Welcome to ${this.channel}`;
}

Teacher.prototype.like = function () {
    this.videoLikes++;
    return `Liked this video! Current likes: ${this.videoLikes}`;
}

const roadsidecoder = new Teacher("Piyush", "RoadsideCoder");
console.log(roadsidecoder);
```

# Interview questions on Classes and Constructors

### Question 1 - Explain the difference between a class and an object in JavaScript.

    Answer: A class is a blueprint that defines the structure and behavior of objects.

    Objects are instances of classes that possess properties and methods defined by the class.

### Question 2 - What’s the Output?
```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const square = new Rectangle(5, 5);
const rect = new Rectangle(4, 6);

console.log(square.area()); 
console.log(rect.area()); 

// OutPut : 
// 25
// 24
```

### Question 3 - How does inheritance work in JavaScript classes?

    Inheritance in JavaScript classes is achieved using the extends keyword.

    It allows a sub class(child class) to inherit properties and methods from a super class (parent class).

###  Question 4 - What’s the Output?
```javascript
class Employee {
   constructor() {
     this.name = "John";
   }
   constructor() {
     this.age = 30;
   }
 }

var employeeObject = new Employee();
console.log(employeeObject.name);

// Solution - Uncaught SyntaxError: A class may only have one constructor
```

### Question 5 - Which approach is better and why?
```javascript
const jamesbond = {
  firstName: "Roadside",
  lastName: "Coder",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`.trim();
  },
};

jamesbond.getFullName();

// or

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`.trim();
};

const jamesBond = new Person("Roadside", "Coder");
jamesBond.getFullName();

// Solution -
// Second approach is better since in the first approach, a closure is maintained.

// for each copy of the object containing getFullName method.While in the second approach, the method is registered in the prototype rather than in every object.

// Thus, it is a more memory efficient approach.
```

### Question 6 : Implement this  :
```javascript
const result = calc.add(10).subtract(5).multiply(2).divide(4).getResult();
console.log(result); // 2.5
```

__Solution__ :
```javascript
class Calculator {
    constructor(){
        this.result = 0
    }

    add(num){
        this.result += num;
        return this;
    }

    subtract(num){
        this.result -= num;
        return this;
    }

    multiply(num){
        this.result *= num;
        return this;
    }

    divide(num){
        if (num != 0) {
            this.result /= num;
        } else {
            console.log("Cannot divide by 0");
        }
        return this;
    }

    getResult(){
        return this.result;
    }
}

const calc = new Calculator();
const result = calc.add(10).subtract(5).multiply(2).divide(4).getResult();
console.log(result); // 2.5
```

### Question 7 - Inheritance and Polymorphism ?
    Question : Implement a `Shape` class with an `area()` method.

    Create subclasses `Circle` and `Square` that inherit from `Shape` and override the `area()` method to calculate their respective areas.

```javascript
class Shape {
    area() {
      return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    area() {
      return this.side ** 2;
    }
}

const circle = new Circle(5);
const square = new Square(4);

console.log(circle.area());
console.log(square.area());

// Output :
// 78.53981633974483
// 16
```

### Question 8 - What are Getters and Setters in JS?
    Getters and setters are methods used to control access to the properties of a class.

```javascript
class Teacher {
  constructor(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this._videoLikes = 0;
  }

  intro() {
    return `Hey, it's ${this.name}! Welcome to ${this.channel}!`;
  }

  like() {
    this._videoLikes++;
    return `Like this video! Current likes: ${this._videoLikes}`;
  }

  get videoLikes() {
    return this._videoLikes;
  }

  set videoLikes(likes) {
    if (likes < 0) throw new Error("Must be more than 0");
    else this._videoLikes = likes;
  }
}

const roadsidecoder = new Teacher("Piyush", "RoadsideCoder");
```