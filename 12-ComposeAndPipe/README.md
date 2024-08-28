# Compose and Pipe

### Input Functions : (Needed for understanding Compose and Pipe)
```javascript
const addFive = (num) => {
    return num + 5;
};
  
const subtractTwo = (num) => {
    return num - 2;
};
  
const multiplyFour = (num) => {
    return num * 4;
};
```

## Compose : 
    - compose and pipe are higher-order functions used for function composition in JavaScript.

    - compose takes multiple functions as arguments and returns a new function that applies these functions from right to left.

### Using normal way without using inbuilt functions : 
```javascript
function compose(...fns) {
    return function (init) {
        let result = init;
        for (let i = fns.length - 1; i >= 0; i--) {
            result = fns[i](result)
        }
        return result;
    }
}

const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5));
```

### Using JavaScript inbuilt functions : 
```javascript
// Using reducer
function compose(...fns){
    return function (init) {
        return fns.reduceRight((acc, curr) => {
            return curr(acc);
        }, init)
    }
}
```

## Pip : 
    - pipe, on the other hand, applies the functions from left to right.

    - Both compose and pipe are commonly used in functional programming to create new functions by combining existing ones in a specific order.

### Using normal way without using inbuilt functions : 
```javascript
function pipe(...fns) {
    return function (init) {
        let result = init;
        for (let i = 0; i < fns.length; i++) {
            result = fns[i](result)
        }
        return result;
    }
}
```

### Using JavaScript inbuilt functions :
```javascript
function pipe(...fns){
    return function (init) {
        return fns.reduce((acc, curr) => {
            return curr(acc);
        }, init)
    }
}
```