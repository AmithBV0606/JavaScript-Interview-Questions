// 'this' keyword

console.log("__________Script-1__________")

// Question 1 : this keyword
// this.a = 5

// console.log(this);

// function getParams(){
//     console.log(this.a);
// }
// getParams()

// _______________________________________________________________________________________________________

// Question 2 : 'this' keyword's behaviour with normal functions inside an object.

let user1 = {
    name:"Amith",
    age:23,
    getDetails(){
        console.log(this.name)
    }
}
user1.getDetails() // Amith

let user2 = {
    name:"Amith",
    age:23,
    childObj: {
        newName:"Rao",
        getDetails(){
            console.log(this.newName ," and ", this.name)
        }
    }
}

user2.childObj.getDetails()

// _________________________________________________________________________________________________________

// Question 3 : 'this' keyword's behaviour with arrow functions inside an object.

let user3 = {
    name:"Vikrant",
    age:25,
    getDetails:() => {
        console.log(this.name); // Prints nothing
    }
}
user3.getDetails()
// Here, this is pointing to the window object because the value of "this" keyword in arrow function comes from it's parent function

let user4 = {
    name: "Arjun",
    age:23,
    getDetails(){
        const nestedArrow = () => console.log(this.name);
        nestedArrow();
    }
}
user4.getDetails()

// _________________________________________________________________________________________________________

// Question 4 : 'this' keyword's behaviour inside a class
class userClass {
    constructor(n){
        this.name = n;
    }

    getDetails(){
        console.log(this.name)
        // 'this' keyword here is poitning to all the variables in the constuctor
    }
}

const newObj = new userClass("Amith");
newObj.getDetails()``