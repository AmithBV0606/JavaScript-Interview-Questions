// Continuation of Promisepolyfill.js file

// Polyfill for Promise.all()

Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((item, index) => {
            Promise.resolve(item)
                .then((res) => {
                    results[index] = res;
                    pending--;

                    if(pending === 0){
                        resolve(results);
                    }
                }, reject)
        })
    })
}

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
        reject(`Like the ${video} video`);
      }, 1000);
    });
}
  
function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Share the ${video} video`);
      }, 1000);
    });
}

Promise.allPolyfill([
    importantAction('Chai aur code'),
    likeTheVideo("Promise Polyfills"),
    shareTheVideo("Promise Polyfills"),
])
.then((res) => console.log(res))
.catch((err) => console.error("Failed : ", err));