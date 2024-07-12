// Var | Let | Const
// 1) Scoping

// Variable Shadowing

function test(){
    let a = "Hello";

    if (true) {
        let a = "Hii";
        console.log(a)
    }

    console.log(a);    
}

test()

// Illegal Shadowing
// function test2(){
//     var a = "Hello";
//     let b = "Bye";

//     if (true) {
//         let a = "Hii";
//         var b = "Goodbye";
//         console.log(a);
//         console.log(b);
//     }
// }

// 2) Declaration
// 3) Declaration without initialisation
// 4) Re-initialisation

// 5) Hoisting
console.log("C : ",c); // => Execution phase
var c = 10; // => Creation phase

// How Javascript visualize the above code

var d;
console.log("D : ",d);
d = 25;

// Question 1 : 
function abc(){
    console.log(a);

    var a = 10;
}

abc() // undefined

// Question 2 : Temporal Dead Zone
function def(){
    console.log(a, c);

    var a = 10;
    // let b = 20; // Error : Cannot access 'b' before initialization
    const c = 30;
}

def()