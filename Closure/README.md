# Closures in javaScript

## Scope : 
    - A scope refers to the current context of the code.

    - It can be defined either globally or locally.

    - With the ES6 version of JavaScript we also have block scope.

```javascript
// Global scope
var name = "Roadside Coder";

// Local scope
function local(){

}
```

## Lexical Scope : 
    - Lexical scope in javascript means that a variable defined outside a function can be accessed inside another function, defined after the variable declaration.

### Example 1 : 
```javascript
var name = "Roadside Coder";

function local(){
    console.log(name);
}

local();
```
    - But the opposite is not true, the variable defined inside a function is not accessible outside of that function. 

```javascript
function local(){
    var name = "Roadside Coder";
}
console.log(name);
local();
// This will throw an error : "name" is not defined.
```

### Example 2 :
```javascript
function subscribe() {
    var name = "Roadside Coder";

    function displayName() {
        console.log(name);
    }

    displayName();
}
subscribe();
```

## Closures
    - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

    - In other words, a closure gives you access to an outer function's scope from an inner function. 
    
    - In JavaScript, closures are created every time a function is created, at function creation time.

```javascript
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name, arguments);
  }
  return displayName;
}

// Way 1 : of calling a func
var myFunc = makeFunc();
myFunc();

// Way 2 :
makeFunc()(5);
```
<b>NOTE</b> : `makeFunc()` is not only returning a function reference, but also the `lexical scope` of that returning function. That's how we have access to the `name` variable inside `myFunc()` function call. 

In javascript everytime we create a new function, it bind itself to it's environment or it's lexical scope.

### Closure Scope Chain : 

<b>Every closure has three scopes :</b>

    - Local scope (Own scope)
    - Outer Function Scope
    - Global scope

```javascript
// Global Scope
const e = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));
```