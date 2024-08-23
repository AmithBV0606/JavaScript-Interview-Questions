// Continuation from script-2.js file

// Promise combinator : Promise combinators helps us to execute more than one promise at the same time.

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

// There are 4 types of Promise combinator

// 1) Promise.all : lets you know when either all input promises have been fulfilled or when one of them rejects. 

// Promise.all method lets you input an array with multiple promises. Runs all the promises in parallel. In the end returns an array with all the fulfilled promises

// Promise.all works only when all the promises are fulfilled, even if the single promise is not fulfilled, the complete Promise .all will be failed
// console.log("start");

// Promise.all([
//   importantAction("Roadside Coder"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions")
// ]).then((res)=>{
//   console.log(res[2])
// }).catch(err=>{
//   console.log(err)
// });

// console.log("stop");

// ______________________________________________________________________________________________

// 2) Promise.race : as the name suggests all the promises will race against each other and whichever promise is resolved/rejected first wins.

// - We only get one result for the list of promises given in the Array, the resulted promise might be rejected or fulfilled.

// - Commonly used to reject a promise automatically that is taking to much time to execute.

// console.log("start");

// Promise.race([
//   importantAction("Roadside Coder"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions")
// ]).then((res)=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// });

// console.log("stop");

// ______________________________________________________________________________________________

// 3) Promise.allSettled : Introduced in ES2020, allSettled combinator should be used when the result of each promise supplied doesn't matter (either fulfilled or rejected), but still want to execute each one of it. (It's opposite to promise.all)

// console.log("start");

// Promise.allSettled([
//   importantAction("Roadside Coder"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions")
// ]).then((res)=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// });

// console.log("stop");

// ______________________________________________________________________________________________

// 4) Promise.any : Introduced in ES2021, any combinator should be used when you want the result of the first fulfilled promise

// The only difference from race combinator is that the promise rejections are neglected here.

console.log("start");

Promise.any([
  importantAction("Roadside Coder"),
  likeTheVideo("Javascript Interview Questions"),
  shareTheVideo("Javascript Interview Questions")
]).then((res)=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
});

console.log("stop");