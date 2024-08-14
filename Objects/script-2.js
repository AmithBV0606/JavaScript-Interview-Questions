// OBJECT Interview Questions

// Question 1 : Output

const obj = { a: "one", b: "two", a: "three" };
console.log(obj);

// _____________________________________________________________________________________________

// Question 2 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

let nums = {
    a: 100,
    b: 200,
    title: "My nums"
};

function multiplyByTwo(obj){
    for (key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

multiplyByTwo(nums)
console.log(nums)

// _______________________________________________________________________________________________

// Question 3 : What's the output of the following code?

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123; // a["[Object object]"] = 123;
a[c] = 456; //  a["[Object object]"] = 456;

console.log(a)
console.log(a[b]);

// ______________________________________________________________________________________________

// Question 4 : What is JSON.stringify and JSON.parse?

const user = {
    name:'Amith',
    age:23
}
console.log(user)

// JSON.Stringify()
const newuser = JSON.stringify(user);
console.log(`${typeof newuser}, ${newuser}`);

// JSON.parse()
const newuser2 = JSON.parse(newuser);
console.log(`${typeof newuser2}, ${newuser2.name}`);

// Common usecase
// localStorage.setItem("test", newuser)
// console.log(typeof localStorage.getItem("test"))
// console.log(JSON.parse(localStorage.getItem("test")))

// __________________________________________________________________________________________

// Question 5 : Output

console.log([...'Lydia', ..."amith"]);
const Muser = {
    name:"Aadarsh",
    age:21
}
console.log({...Muser, weight:"70kg"})
// Muser["weight"] = "30kg"
// console.log(Muser)

// ______________________________________________________________________________________________

// Question 6 : What is the output?

const user3 = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user3 };

console.log(admin); // I got it correct!!

// _____________________________________________________________________________________________

// Question 7 : Output

const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };
  
const data = JSON.stringify(settings, ['level', 'health']); // This will stringify only 'level' and 'health'
console.log(data);

// ____________________________________________________________________________________________

// Question 8 : What is the Output?

const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN => because "this" inside the perimeter function is pointing to the window object

// _________________________________________________________________________________________________
// Question 9 : What is de-structuring?

const person = {
    name : "Amith B V",
    age:23,
    fullName: {
        firstName:"Amith",
        lastName:"Vijaya Kumari"
    }
}
let { age : myName } = person;
console.log(myName)
age = 30;
console.log(age)

let {fullName:{lastName}} = person
console.log(lastName)

// _________________________________________________________________________________________

// Question 10 : Output

function getItems(fruitList, favoriteFruit, ...args) {
    console.log(fruitList)
    console.log(favoriteFruit)
    console.log(...args)
    return [...fruitList, ...args, favoriteFruit]
}
  
console.log(getItems(["banana", "apple"], "pear", "orange"));