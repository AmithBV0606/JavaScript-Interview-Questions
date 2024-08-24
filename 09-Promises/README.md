# Most asked questions on promises in JavaScript

### Question 1 : What is Output ?
```javascript
console.log('start'); // Synchronous

const promise1 = new Promise((resolve, reject) => {
  console.log(1); // Synchronous
  resolve(2);
})

promise1.then(res => { // Asynchronous
  console.log(res)
})

console.log('end'); // Synchronous

// Output : 
// Start
// 1
// end
// 2
```
    - "start" is printed first because it's the first thing the code tells the computer to do.

    - Then, the code creates a promise and immediately prints "1".

    - Next, "end" is printed because the computer finishes all the simple tasks first before handling the promise.

    - Finally, the computer goes back to the promise, finishes it, and prints "2".

### Question 2 : What is Output?
```javascript
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
})

promise1.then(res => {
  console.log(res);
})

console.log('end');

// Output : 
// start
// 1
// 3
// end
// 2
```

### Question 3 : What is Output?
```javascript
console.log('start');

const fn = () => {
    return new Promise((resolve, reject) => {
        console.log(1);
        resolve("Success");
    })
}

console.log('middle');

fn().then(res => {
  console.log(res);
});

console.log('end');

// Output :
// start
// middle
// 1
// end
// Success
```

### Question 4 : What is Output?
```javascript
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise
.then(function() {
    console.log('Success 1');
})
.then(function() {
    console.log('Success 2');
})
.then(function() {
    console.log('Success 3');
})
.catch(function() {
    console.log('Error 1');
})
.then(function() {
    console.log('Success 4');
})
.then(function() {
    console.log('Success 5');
});

// Output : 
// Error 1
// Success 4
// Success 5
```

### Question 5 : What is Output?
```javascript
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
.then(function(data) {
    console.log(data); // success
    return job(false);
})
.catch(function(error) {
    console.log(error); // error
    return 'Error caught';
})
.then(function(data) {
    console.log(data); // Error caught
    return job(true);
})
.catch(function(error) {
    console.log(error); 
});

// Output : 
// success
// error
// Error caught
```

### Question 6 : What is the Output?
```javascript
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
.then(function(data) {
    console.log(data); // success
    return job(true);
})
.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat'; // This is a rejected promise
    }
    return job(true);
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error); // Defeat
    return job(false);
})
.then(function(data) {
    console.log(data); 
    return job(true);
})
.catch(function(error) {
    console.log(error); // error
    return 'Error caught';
})
.then(function(data) {
    console.log(data); // Error caught
    return new Error('test');
})
.then(function(data) {
    console.log('Success:', data.message); // Success:test
})
.catch(function(data) {
    console.log('Error:', data.message);
});

// Output : 
// success
// Defeat
// error
// Error caught
// Success: test
```

### Question 7 : Promises Chaining
```javascript
const firstPromise = new Promise((resolve, reject) => {
    resolve('First!');
});

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
})

secondPromise
    .then(res => res)
    .then(res => console.log(res));
```

### Question 8 : Rewrite this example code using `async/await` Instead of `.then/catch` ?
```javascript
function loadJson(url) {
    return fetch(url)
        .then(response => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    });
}
      
loadJson('https://javascript.info/no-such-user.json').catch((err) => {
    console.log(err);
});
```

```javascript
// Answer
async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
  
    throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json').catch((err) => {
    console.log(err);
});
```

### Question 9 : Solve promise Recursively ?
```javascript
function promRecurse(funcPromises){
    // Write the implementation here
}
```

```javascript
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

// Answer
function promRecurse(funcPromises){
    if(funcPromises.length === 0) return;

    const currPromise = funcPromises.shift();

    currPromise
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    promRecurse(funcPromises);
}

promRecurse([
    importantAction("Roadside Coder"),
    likeTheVideo("Javascript Interview Question"),
    shareTheVideo("Javascript Interview Question"),
])
```