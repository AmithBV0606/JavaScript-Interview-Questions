# Object in Javascript

    - JavaScript is designed on a simple object-based paradigm. 
    
    - An object is a collection of properties, and a property is an association between a name (or key) and a value. 
    
    -A property's value can be a function, in which case the property is known as a method.
    
    - Objects can be created using the Object() constructor or the object initializer / literal syntax.

```javascript
const user = {
  Name: "Amith",
  Age: 23,
};

user.Name = "Vikram";
delete user.Age;
console.log(user);
```
### delete Keyword : 
```javascript
const func = (function (a) {
  delete a; // will not have any effect on "a"
  return a;
})(5);
console.log(func);

// "a" is a local variable. "delete" keyword is only used when we want to delete properties from an object and not a local variable.
```

### String as key :
```javascript
const user = {
    name: "Roadside Coder",
    age:24,
    "like this video": true
}
console.log(user["like this video"]);
delete user["like this video"];
```

### Adding dynamic key-value pair :
```javascript
const key = "lastName";
const value = "Rona";

const User = {
    firstName: "Vikrant",
    [key]: value,
}

console.log(User);
console.log(User.firstName);
console.log(User.lastName);
```

### Iterating through an Object : For-in loop
```javascript
const user = {
    firstName: "Vijaya",
    lastName: "Kumari",
    age: 56,
    gender: "female"
}

for (const key in user) {
    console.log(key);
    console.log(user[key]);
}
```

# Interview Questions on Object :

### Question 1 : What's the Output ?
```javascript
const obj = { 
    a: "one", 
    b: "two", 
    a: "three" 
};
console.log(obj);

Output : { a: 'three', b: 'two' }
```
Note : if an object has 2 keys with same name, the first key's value will be replaced by second key's value.

### Question 2 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.
```javascript
let nums = {
    a: 100,
    b: 200,
    title: "My nums"
};

function multiplyByTwo(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *= 2
        }
    }
}

multiplyByTwo(nums);
console.log(nums);
```

### Question 3 : What's the output of the following code ? [VIMPQ]
```javascript
const a = {};
const b = {key:"b"};
const c = {key:"c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```
```
When we try to assign b to a as a key i.e a[b], since an object(b) cannot be converted into a key , both a[b] = 123 and a[c] = 456 will be registered as a["[object object]"] = 123 and b["[object object]"] = 456

Output = 456
```

### Question 4 : What is JSON.stringify and JSON.parse ?
```javascript
const user = {
    name:'Amith',
    age:23
}
console.log(user)

// JSON.Stringify()
const strObj = JSON.stringify(user);
console.log(`${typeof strObj}, ${strObj}`);

// JSON.parse()
console.log(typeof JSON.parse(strObj), JSON.parse(strObj));
```
```javascript
Common usecase
localStorage.setItem("test", strObj);
console.log(JSON.parse(localStorage.getItem("test")));
```

### Question 5 : What's the Output ?
```javascript
console.log([..."Lyda"]);

Output : [ 'L', 'y', 'd', 'a' ]
```

### Question 6 : What's the Output ?
```javascript
const user = {name: "Lyda", age: 21};
const admin = {admin: true, ...user}

console.log(admin);

Output : { admin: true, name: 'Lyda', age: 21 }
```
 
### Question 7 : What's the Output ?
```javascript
const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };
  
const data = JSON.stringify(settings, ['level', 'health']); // This will stringify only 'level' and 'health'
console.log(data);
```

### Question 8 : What is the Output ?
```javascript
const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => {
        return 2 * Math.PI * this.radius;
    },
  };
  
console.log(shape.diameter());
console.log(shape.perimeter());
```
```
Output : 
20
NaN => because "this" inside the perimeter function is pointing to the window object
```

### Question 9 : What is de-structuring?
```javascript
const person = {
    name : "Amith B V",
    age:23,
    fullName: {
        firstName:"Amith",
        lastName:"Vijaya Kumari"
    }
}

const { name } = person;
console.log(name);

// Re-naming the destructured value
const { age : Vayassu } = person;
console.log(Vayassu);

// Destructuring of nested Objects
const {fullName:{lastName}} = person;
console.log(lastName)
```

### Question 10 : What's the Output ?
```javascript
function getItems(fruitList, favoriteFruit, ...args) {
    // console.log(fruitList)
    // console.log(favoriteFruit)
    // console.log(...args)
    return [...fruitList, ...args, favoriteFruit]
}

console.log(getItems(["banana", "apple"], "pear", "orange"));
```
NOTE : A rest parameter must be last in a parameter list. But spread operator can be used inbetween.

### Question 11 : What's the Output ? Object referencing
```javascript
let c = { greeting: 'Hey!' };
let d;

d = c; // Shallow Copy
c.greeting = 'Hello';
console.log(d.greeting); 
```
```
When we say d = e, we're not copying the properties of one object to the other variable. We just provide the reference of object c to the variable d
```

### Question 12 : What's the Output ?
```javascript
console.log({a:1} == {a:1}); 
console.log({a:1} === {a:1}); 

// Both "console.log" statements will output false.
```
### {a:1}" == "{a:1}: 

    The "==" operator checks for equality but not necessarily for identity. However, in JavaScript, when comparing objects (including arrays and functions) using "==", the comparison is based on reference, not value. Since the two objects are different instances (even though they contain the same properties and values), the result is false.

### {a:1} === {a:1} : 
    The "===" operator checks for both equality and identity (strict equality). Like with "==", the comparison here is based on reference, so since these are two different objects, the result is also false.

### Question 13 : What is the output ?
```javascript
let person = { name: 'Lydia' };
const members = [person]; // members[0] = person
person = null;

console.log(members);
```

### Question 14 : What's the Output ?
```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log(x.number *= 2);
};

multiply(); // 20
multiply(); // 20
multiply(value);  // 20
multiply(value); // 40
```

### Question 15 : What's the Output ?
```javascript
function changeAgeAndReference(person) {
    person.age = 25; 
    // Since "person" variable has the reference to the object "personobj1", "person.age = 25;" will change the original object's(personobj1) age property. 

    person = {
      name: 'John',
      age: 50
    };
    // Here we're re-assigning the person variable here to some other object.

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); 
console.log(personObj2); 
```
```
Output : 

{ name: 'Alex', age: 25 }
{ name: 'John', age: 50 }
```

### Question 16 : What is Shallow copy ?

#### Shallow Copy : 
    - When a reference variable is copied into a new reference variable using the assignment operator(let newEmployee = employee;), a shallow copy of the referenced object is created.

    - In simple words, a reference variable mainly stores the address of the object it refers to.

    - When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one. This means both the old and new reference variables point to the same object in memory.

    - As a result, if the state of the object changes through any of the reference variables it is reflected for both.
```javascript
let employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as 
// newEmployee is changed.
```

### What is Deep copy ?

#### Deep Copy : 
    - Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates a separate memory location for the new object, and then assigns the copied members to the new object.

    -  In this way, both the objects are independent of each other and in case of any modification to either one, the other is not affected.

    - Also, if one of the objects is deleted the other still remains in the memory.
```javascript
let employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
```

NOTE : Ways to clone or Deep copy an object :
1) Using Object.assign({}:target, source)
2) Using JSON.parse() and JSON.stringify() methods.
3) Using spread operator