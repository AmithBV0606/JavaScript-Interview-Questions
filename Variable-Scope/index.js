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
console.log(c); // => Execution phase
var c = 10; // => Creation phase