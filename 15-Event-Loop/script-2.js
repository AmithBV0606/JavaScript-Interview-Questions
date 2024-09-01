// Interview Questions on Event Loop

// Question 1 - What is Event Loop?
/*
  Javascript is single threaded and The event loop is responsible for how its asynchronous behavior happens.

  The event loop is like a traffic controller in JavaScript that manages the execution of code.

  It ensures tasks are processed in an orderly manner, handling asynchronous operations by continuously checking if there are pending tasks in queues(microtasks and macrotasks). 
*/

// Question 2 - Why we need event loop to manage these task queue and microtask queue?

// Explanation: The event loop is necessary to handle asynchronous operations in JavaScript effectively. It manages task queues and microtask queues to ensure that tasks are executed efficiently without blocking the main thread

// Question 3 - What is the output ?

// This is a bad code as it is blocking the main thread.
blockMainThread();

console.log("Start");

function blockMainThread() {
  const start = Date.now();
  while (Date.now() - start < 3000) {}
  console.log("running..");
}

console.log("End");

// Output : 
// running..
// Start
// End

// Question 4 - What is the output ?

setTimeout(function a() {
    console.log("a");
  }, 1000);
  
  setTimeout(function b() {
    console.log("b");
  }, 500);
  
  setTimeout(function c() {
    console.log("c");
  }, 0);
  
  function d() {
    console.log("d Runs");
  }
  
  d();
  
  // Output :
  // d Runs
  // c
  // b
  // a

// Question 5 - Whats the output ?

function a() {
    for (var i = 0; i < 3; i++) {
      setTimeout(function log() {
        console.log(i); // What is logged?
      }, i * 1000);
    }
  }
  
  a();
  
  // Output : 
  // 3
  // 3
  // 3
  
  // Solution : use "let" instead of "var".

// Question 6 - What's the Output ?

Promise.resolve()
  .then(function a() {
    Promise.resolve().then(
      setTimeout(function d() {
        console.log("d Runs");
      }, 0)
    );
    Promise.resolve().then(function e() {
      console.log("e Runs");
    });
    throw new Error("Error Occured!");
    Promise.resolve().then(function f() {
      console.log("f Runs");
    });
  })
  .catch(function b() {
    console.log("b Runs");
  })
  .then(function c() {
    console.log("c Runs");
  });

// Output : 
// e Runs
// b Runs
// c Runs
// d Runs

// Question 7 - What's the Output?

function pause(millis) {
    return new Promise(function p(resolve) {
      setTimeout(function s() {
        resolve("resolved");
      }, millis);
    });
  }
  
  const start = Date.now();
  console.log("Start");
  
  pause(1000).then((res) => {
    const end = Date.now();
    const secs = (end - start) / 1000;
    console.log(res, ":", secs);
  });

// Output :
// Start
// resolved : 1.003