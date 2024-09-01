// Event Loop : 

// Role of event loop during the execution of Synchronous Code.n

// Call Stack
// console.log("1");
// console.log("2");
// console.log("3");

// Role of event loop during the execution of Asynchronous Code.

// Task Queue
// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 0);
// console.log("3");

// Role of event loop during the execution of Asynchronous Promises Code

// Micro-task Queue
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then(function a(response) {
    console.log("Fetch completed:", response[0]);
})
.catch(function c(error) {
    console.error("Fetch error:", error);
});

Promise.resolve().then(function b() {
  console.log("Promise resolved");
});

Promise.reject().catch(function c() {
  console.log("Promise rejected");
});

// How event loop works when both Task Queue and Micro-task Queue are full

// Task Queue vs Micro-task Queue
console.log("Start");

setTimeout(() => {
  console.log("Inside Settimeout (task)");
}, 0); // Task queue

Promise.resolve().then(() => {
  console.log("Inside Promise (micro-task)");
}); // Micro Task Queue

console.log("End");

// Start
// End
// Inside Promise (micro-task)
// Inside Settimeout (task)