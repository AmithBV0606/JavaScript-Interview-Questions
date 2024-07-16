// Objects

const user = {
  Name: "Amith",
  Age: 23,
};

delete user.Age;
console.log(user);

// OBJECT Interview Questions
const func = (function (a) {
  delete a; // will not have any effect on "a"
  return a;
})(5);

console.log(func);

// Adding dynamic key-value pair
const property = "lastName";
const name = "Rona";

const newUser = {
    firstName: "Vikrant",
    [property]: name, // Dynamically adding Key:value 
}

console.log(newUser)
console.log(newUser.firstName)
console.log(newUser.lastName)

// Iterating through an Object
const user1 = {
    firstName: "Vijaya",
    lastName: "Kumari",
    age: 56,
    gender: "female"
}

for (const key in user1) {
    // console.log(key);
    console.log(user1[key])
}