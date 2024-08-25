// Debouncing and Throttling interview Questions : 

// Question 1 :   Create a button UI and add debounce as follows : 

// a) Show "Button Pressed <X> Times" every time button is pressed 
// b) Increase "Triggered <Y> Times" count after 800ms of debounce

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggeredCount = 0;

// const debounceCount = _.debounce(() => {
//     triggeredCount += 1;
//     count.innerHTML = triggeredCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     debounceCount();
// });

// _____________________________________________________________________

// Question 2 : Create a button UI and add throttle as follows :

// a)  Show "Button Pressed <X> Times" every time button is pressed
// b) Increase "Triggered <Y> Times" count after 800ms of debounce

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggeredCount = 0;

// const throttleCount = _.throttle(() => {
//     triggeredCount += 1;
//     count.innerHTML = triggeredCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     throttleCount();
// });

// _____________________________________________________________________

// Question 3 : Create Debounce() Polyfill Implementation.

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggeredCount = 0;

// const myDebounce = (cb, d) => {
//     let timer;

//     return function (...args) {
//         if (timer < d) {
//             clearTimeout(timer);
//         }

//         timer = setTimeout(() => {
//             cb(...args);
//         }, d);
//     }
// }

// const debounceCount = myDebounce(() => {
//     triggeredCount += 1;
//     count.innerHTML = triggeredCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     debounceCount();
// });

// _____________________________________________________________________

// Question 4 : Create Throttle() Polyfill Implementation.

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

const myThrottle = (cb, d) => {
    let last = 0;

    return (...args) => {
        let current = new Date().getTime();

        if(current - last < d) return;

        last = current;

        return cb(...args);
    }
}

const throttleCount = myThrottle(() => {
    triggeredCount += 1;
    count.innerHTML = triggeredCount;
}, 800);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    throttleCount();
});