// Event propagation in JavaScript

// Question 1 : What is event propagation?

// Question 2 : What is Event Bubbling?

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// div.addEventListener("click", () => {
//     alert("div");
// });

// form.addEventListener("click", () => {
//     alert("form");
// });

// button.addEventListener("click", () => {
//     alert("button");
// });

// __________________________________________________

// Question 3 : event.target vs this.target vs event.currentTarget

// div.addEventListener("click", func);
// form.addEventListener("click", func);
// button.addEventListener("click", func);

// function func(event) {
//     alert("currentTarget : " + event.currentTarget.tagName + ", target = " + event.target.tagName + ", this=" + this.tagName);
// }

// _____________________________________________________

// Question 4 : What is Event Capturing / Trickling ?

// div.addEventListener("click", () => {
//     alert("div");
// },{capture:true});

// form.addEventListener("click", () => {
//     alert("form");
// },{capture:true});

// button.addEventListener("click", () => {
//     alert("button");
// },{capture:true});

// __________________________________________________

// Question 5 : How to stop bubbling or capturing ?

// div.addEventListener("click", (event) =>  {
//   alert("div");
// });

// form.addEventListener("click", (event) => {
//     event.stopPropagation();
//   alert("form");
// });

// button.addEventListener("click", (event) => {
//   alert("button");
// });

// _________________________________________________

// Question 6 : What is event delegation ?

document.querySelector(".products").addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
        window.location.href += "/" + event.target.className;
    }
});

// ___________________________________________________

// Question 7 : What is the output ?

div.addEventListener("click", function (event) {
  alert("div");
});

form.addEventListener("click", function (event) {
  alert("form");
}, {capture: true});

button.addEventListener("click", function (event) {
  alert("button");
});