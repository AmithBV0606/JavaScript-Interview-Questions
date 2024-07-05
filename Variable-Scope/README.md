# Notes

### Variable Shadowing :
In JavaScript, variable shadowing occurs when a variable with the same name as a variable in a higher scope is declared in a lower scope.

It's a common practice but can lead to confusion if not used carefully because the inner variable will "shadow" the outer variable.

```
function test1(){
    let a = "Hello";

    if (true) {
        let a = "Hii";
        console.log(a)
    }

    console.log(a);    
}
```
In above example, let a inside the if block shadows the outer let a, and they are two separate variables despite having the same name.

### Illegal Shadowing:
This occurs when trying to shadow a variable using var within the same scope where that variable is already defined using let or const.

```
 function test2(){
        var a = "Hello";
        let b = "Bye";

    if (true) {
        let a = "Hii";
        var b = "Goodbye";
        console.log(a);
        console.log(b);
    }
}

```
In the above example, let b = "Bye"; is illegal shadowing because let cannot shadow the var it can happen vidce-versa.

### Hoisting : 
In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.

However, only the declarations are hoisted, not the initializations or assignments.

```
console.log(c); // => Execution phase
var c = 10; // => Creation phase

```
In the above example, console.log(c); will result in undefined because the variable c is hoisted to the top but not initialized until later in the code (var c = 10;).

### Temporal Dead Zone (TDZ):
TDZ is a specific behavior related to variables declared using let and const. It refers to the period between the start of the block scope and the actual declaration of the variable.

During the TDZ, accessing the variable will result in a ReferenceError.

```
function abc(){
    console.log(a,b,c)

    const c = 30;
    let b = 20;
    var a = 10;
}

```
In fourth example, trying to log a, b, and c before their respective declarations will result in ReferenceError because they are in the TDZ until they are declared.