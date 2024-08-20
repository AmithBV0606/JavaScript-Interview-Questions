// Question 8 : How would you use a closure to create a private counter?

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrieve,
  };
}

const c = counter(); // Private Counter

c.add(10);
c.add(10);

console.log(c.retrieve());

//____________________________________________________________________________________________
// Question 8 : What is Module Pattern?

var Module = (function () {
  function privateMethod() {
    console.log("Private");
  }

  return {
    publicMethod: function () {
      console.log("Public");
    },
  };
})();

Module.publicMethod();
// Module.privateMethod() // Will throw error

// _________________________________________________________________________________________
// Question 9 : Make this run only once

// let view;
// function likeTheVideo(){
//     view = "Roadside Coder";
//     console.log("Subscribe to ", view)
// }

// likeTheVideo()
// likeTheVideo()
// likeTheVideo()

// Solution 1 :
let view;
function likeTheVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already Subscribed");
    } else {
      view = "Roadside Coder";
      console.log("Subscribe to ", view);
      called++;
    }
  };
}

let isSubscribed = likeTheVideo();
isSubscribed()
isSubscribed()
isSubscribed()