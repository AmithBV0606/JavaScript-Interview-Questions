// Question 11 : Output

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
d.greeting = "How are you?"
console.log(c.greeting)

// ________________________________________________________________________________________________

// Question 12 : Output

console.log({a:1} == {a:1}); // false
// console.log({a:1} === {a:1}); => false

// ____________________________________________________________________________________________

// Question 13 : What is the output?

let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);

// _____________________________________________________________________________________________

// Question 14 : Output

const value = { number: 10 };
// console.log({...value})

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply(value);  // 20
multiply(value); // 40

//_________________________________________________________________________________________________

// Question 15 : Output 

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

// __________________________________________________________________________________________

// Question 16 : Shallow copy VS Deep copy

console.log(Array.from("Amith"))

const userAD = {
    name: "Amith",
    age:23
}

// Shallow Copy
// let newuserAD = userAD;
// console.log("Old Object : ",userAD)
// console.log("Copied Object",newuserAD)
// newuserAD.age = 25;
// console.log(userAD)
// userAD.name = "Vikram";
// console.log(newuserAD)

const userBC = {
  name: "Kalki",
  age:35
}

// Deep Copy
// let newuserBC = Object.assign({}, userBC)
let newuserBC = {...userBC}
console.log("Old Object : ",userBC)
console.log("Copied Object",newuserBC)
console.log("+++++++++++After Modification+++++++++++++++")
newuserBC.name = "Kali"
console.log("Old Object : ",userBC)
console.log("Copied Object",newuserBC)