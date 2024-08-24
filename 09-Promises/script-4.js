// Continuation of script-3.js file

// async & await
console.log("Start");
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
        }, 1500);
    });
}
  
function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(`Share the ${video} video`);
        }, 2000);
    });
}

const result = async () => {
   try {
     message1 = await importantAction("Roadside Coder");
     message2 = await likeTheVideo("JavaScript Interview Questions");
     message3 = await shareTheVideo("JavaScript Interview Questions");
 
     console.log({message1, message2, message3});
   } catch (error) {
     console.log("Promises failed", error)
   }
}

result();
console.log("Stop");