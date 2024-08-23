// Continuation from script-1.js file.

// Rewriting Callbacks with the help of promises.

console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 2000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 3000);
  });
}

// importantAction("Roadside Coder").then((res) => {
//   console.log(res);
//   likeTheVideo("Javascript Interview Questions").then((res) => {
//     console.log(res);
//     shareTheVideo("Javascript Interview Questions").then((res) => {
//       console.log(res);
//     });
//   });
// }).catch(err=>console.log(err));

console.log("stop");

// Even though this approach looks better than the callback approach, this still is a promise hell. To avoid callback hell we landed into promise hell.

console.log("______________________________________________________________________")

// There are many approach to solve this problem, Promise Chaining is one among them.
importantAction("Roadside Coder")
.then((res) => {
    console.log(res);
    return likeTheVideo("Javascript Interview Questions");
}).then((res) => {
    console.log(res);
    return shareTheVideo("Javascript Interview Questions");
}).then((res) => {
    console.log(res)
})

console.log("______________________________________________________________________")

// Another way is Promise combinator, continued in script-3.js file