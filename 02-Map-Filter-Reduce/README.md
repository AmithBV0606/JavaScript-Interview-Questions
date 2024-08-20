# Map, Filter and Reduce

## Map

    - Map method is used for creating a new array from an existing array, by applying a Function to each element of an array.

    - Map method does not execute the function for empty elements.

    - Map method does not change the original array.

### Syntax : 
```javascript
array.map(function(currentValue, index, arr), thisValue);

// Parameters : 

// 1) function(Required) : A function to run for each array element.

// 2) currentValue(Required) : The value of the current element.

// 3) index(Optional) : The index of the current element.

// 4) arr(Optional) : The array the current element belongs to.

// 5) thisValue(Optional) : Default "undefined". A value passed to the function to be used as its this value.
```

### Example : 
```javascript
const nums = [1, 2, 3, 4];

const newNums = nums.map((item, index, arr) => {
    return item * 3;
})

console.log(newNums)
```

### Map Polyfill : 
```javascript
Array.prototype.myMap = function(callback){
    let temp = [];

    for(let i = 0; i < this.length; i++){
        temp.push(callback(this[i], i, this));
    }

    return temp;
}
```

## Filter

    - Filter method takes each element in an array and it applies a conditional statement against it. 
    
    - If the conditional returns "true", that particular element will be pushed into the output array.

    - If the conditional returns "false", that element will not be pushed into the output array.

    - inshort filter returns only those elements from the array, which fulfills the provided criteria.

### Syntax : 
```javascript
array.filter(function(currentValue, index, arr), thisValue)

// Parameters : 

// 1) function(Required) : A function to run for each array element.

// 2) currentValue(Required) : The value of the current element.

// 3) index(Optional) : The index of the current element.

// 4) arr(Optional) : The array the current element belongs to.

// 5) thisValue(Optional) : Default "undefined". A value passed to the function as its this value.
```

### Example : 
```javascript
const nums = [1, 2, 3, 4]

const moreThanTwo = nums.filter((item, index, arr) => {
    return item > 2;
})

console.log(moreThanTwo)
```

### Filter Polyfill : 
```javascript
Array.prototype.myFilter = function(callback){
    let temp = [];

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            temp.push(this[i]);
        }
    }

    return temp;
}
```

## Reduce

    - Reduce method reduces an array of values down to just single value i.e the function's accumulated result.

    - The reduce method executes a reducer function for array element.

    - The reduce method does not execute the function for empty array elements.

    - The reduce method does not change the original array.

    - Reducer method has 2 parameters, a callback function and an initial value.

### Syntax : 
```javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue);

// Parameters : 

// 1) total(Required) : The initialValue, or the previously returned value of the function. 

// 2) currentValue(Required) : The value of the current element.

// 3) currentIndex(Optional) : The index of the current element.

// 4) arr(Optional) : The array the current element belongs to.
```

```javascript
const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, cur, i, arr) => {
    return acc + cur;
})

console.log(sum);
```

### Reduce Polyfill : 
```javascript
Array.prototype.myReduce = function(callback, initialVal){
    let accumulator = initialVal;

    for(let i = 0; i < this.length; i++){
        accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i]
    }

    return accumulator;
}
```
<br >

# Map, Filter and Reduce - Interview Question

```javascript
let students = [
    {name: "Amith", rollNumber: 5, marks: 40},
    {name: "Vijaya", rollNumber: 50, marks: 90},
    {name: "Arjun", rollNumber: 9, marks: 95},
    {name: "Parth", rollNumber: 25, marks: 45},
]
```

### Question 1 : Return only the name of the students in Capital letters
```javascript
let names = students.map((student) => {
    return student.name.toUpperCase();
})

console.log(names)
```

### Question 2 : Return details of only who scored more than 60
```javascript
let details = students.filter(student => student.marks > 60);

console.log(details);
```

### Question 3 : More than 60 marks and roll number greater than 15
```javascript
let details = students.filter(student => student.marks > 60 && student.rollNumber > 15);

console.log(details);
```

### Question 4 : Sum of marks of all students
```javascript
let total = students.reduce((acc, curr, i, arr) => {
    return acc + curr.marks;
});

console.log(total);
```

### Question 5 : Return names of students who scored more than 60.
```javascript
let result = students.filter((student) => {
    return student.marks > 60;
}).map((student) => {
    return student.name;
});

console.log(result);
```

### Question 6 : Return total marks for students with marks greater than 60, after adding 20 marks to those who have scored less than 60.
```javascript
let total = students.map((student) => {
    if(student.marks < 60){
        student.marks += 20
    }
    return student;
}).filter((student) => {
    return student.marks > 60;
}).reduce((acc, student) => {
    return acc + student.marks;
}, 0);
```