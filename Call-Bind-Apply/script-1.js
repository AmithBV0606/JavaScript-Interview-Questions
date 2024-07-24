// Call, Bind and Apply in javaScript : Manipulating the context of the function with the help of call, bind and Apply
// Question 1 : What is call?

// With call(), an object can use a method belonging to another object.

// "Call is a function that helps you change the context of the invoking function" => Most precise definition

// "call is a function that you use to change the value of this inside a function and execute it with the arguments provided"

var obj = { name: "Amith" }

function sayHello(age){
    return "Hello " + this.name + "You are " + age;
}

console.log(sayHello.call(obj, 23));

// ________________________________________________________________

// Question 2 : What is Apply?

// Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

var obj2 = { name: "Amith" }

function about(age, profession){
    return "Hello " + this.name + " you are " + age + " and you are a " + profession;
}

console.log(about.apply(obj2, [23, "Software Engineer"]))

// _______________________________________________________________

// Question 3 : What is Bind?

// Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

var obj3 = { name: "Amith" }

function info(age, profession){
    return "Hello " + this.name + " you are " + age + " and you are a " + profession;
}

const bindFunc = info.bind(obj3);
// The bind() method creates a new function

console.log(bindFunc(30, "SWE-III @ Google"))
console.log(bindFunc(30, "SWE-III @ Netflix"))
// and when that new function is called it set "this" keyword to the first argument(obj3), which is passed to the bind method.

// if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.

console.log("_______________________________________________")