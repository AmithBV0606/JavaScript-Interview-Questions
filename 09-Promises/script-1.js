// Promises in Javascript
// synchronous vs asynchronous code

//Synchronous code
console.log("start");
console.log("Subscribe to Roadside Coder");
console.log("stop");

// Asynchronous code with setTimeout
console.log("start");

setTimeout(() => {
  console.log("Subscribe to Roadside Coder");
}, 2000); 

console.log("stop");

// Js executes Synchronous code first and then Asynchronous code

// Asnychronous Example
console.log("start");

function importantAction1(username) {
    setTimeout(() => {
      return `Subscribe to ${username}`;
    }, 1000);
  }

const message = importantAction1('Roadside Coder');
console.log(message); // undefined

console.log("stop");

// How to make the above code asynchronous?
console.log("start");

function importantAction2(username, cb) {
    setTimeout(() => {
      cb(`Subscribe to ${username}`);
    }, 1000);
}

importantAction2('Roadside Coder', (message2) => {
    console.log(message2);
});

console.log("stop");

console.log("________________________________________________________________")

// Callback Hell
console.log("start");

function importantAction3(username, cb) {
  setTimeout(() => {
    cb(`Subscribe to ${username}`);
  }, 1000);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like the ${video} video`);
  }, 1000);
}

function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share the ${video} video`);
  }, 1000);
}

importantAction3("Roadside Coder", (message) => {
  console.log(message);
  likeTheVideo("Javascript Interview Questions", (action) => {
    console.log(action);
    shareTheVideo("Javascript Interview Questions", (action) => {
        console.log(action);
      });
  });
}); 

console.log("stop");

console.log("________________________________________________________________")

// As a solution to callbach hell, Promises was introduced
console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Subscribed to Roadside Coder");
    else reject(new Error("Why aren't you subscribed to Roadside Coder?"));
  }, 2000);
});

sub
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
});

console.log("stop");

// Ways of writing promises
console.log("start");

const sub1 = Promise.resolve("Subscribe to Roadside Coder");
console.log(sub1);

sub1
  .then((message) => {
    console.log(message);
  });

console.log("stop");

// Same goes for Promise.reject along with catch statement
console.log("start");

const sub2 = Promise.reject("Haven't subscribed!!");
console.log(sub2);

sub2
  .catch((message) => {
    console.log(message);
  });

console.log("stop");