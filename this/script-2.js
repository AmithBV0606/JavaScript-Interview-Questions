// Interview Questions

console.log("__________Script-2__________")

// Question 1 : What is the Output?

const userA = {
    firstName: 'Amith!!!',
    getName() {
      const firstName = 'Rao';
      return this.firstName;
    }
};

console.log(userA.getName());

// _______________________________________________________________________

// Question 2 : What is the result of accessing its `ref`? Why?

function makeUser() {
    return {
      name: "John",
    //   ref: this
    ref(){
       return this;
    }
    };
}
  
let userB = makeUser();
  
console.log(userB.ref().name)

// ______________________________________________________________________________

// Question 3 : What logs to console the following code snippet?

const userC = {
    name: 'Piyush Agarwal!',
    logMessage() {
      console.log(this.name); 
    }
};

// setTimeout(userC.logMessage, 5000); 
// Logs nothing, because setTimeout is expecting a callback and not an object method

// setTimeout(function() {
//     userC.logMessage();
// }, 5000);

// _______________________________________________________________________________________________

// Question 4 : Output

const userD = {
    name: 'Piyush',
    greet() {
      return `Hello, ${this.name}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.name}!`;
    }
};

console.log(userD.greet());
console.log(userD.farewell())

// let pattern = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         pattern += "*"
//     }  
//     pattern += "\n"
// }
// console.log(pattern)

// ______________________________________________________________________________________________

// Question 5 : Create a calculator using objects

const calculator = {
    read() {
        this.a =  +prompt("a = ");
        this.b =  +prompt("b = ");
    },

    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    }
}

// calculator.read()
// console.log(calculator.mul())
// console.log(calculator.sum())

// ____________________________________________________________________

// Question 6 : What will be the output?

var length = 4;

function callback(){
    console.log(this.length)
}

const userE = {
    length: 5,
    // method(fn){
    //     fn();
    // },
    method(){
        arguments[0](); // arguements = [callback, 2, 3]
    },
};

// userE.method(callback) // 4
userE.method(callback, 2, 3) // 3

// ___________________________________________________________________________________________

// Question 7 : Implement calc

const calc = {
    total : 0,
    sum(a){
        this.total += a;
        return this;
    },
    mul(b){
        this.total *= b;
        return this;
    },
    sub(c){
        this.total -= c;
        return this;
    }
}

const result = calc.sum(50).sub(30).mul(5)
console.log(result.total)