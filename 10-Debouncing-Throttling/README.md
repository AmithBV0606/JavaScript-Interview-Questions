# Debouncing and Throttling

    Throttling and debouncing are techniques used to control the rate at which a function is invoked, particularly in scenarios where frequent events (like user interactions) can lead to excessive calls and potentially impact performance.

## Debouncing
    - Debouncing is a technique that delays the execution of a function until a certain amount of time has passed since the last event's occurrence. 

    - It's useful when you want the function to be called after a period of inactivity, and it prevents rapid consecutive calls.

## Use Cases
    - Debouncing is ideal when you want to wait for a pause in the events before triggering a function.

    - This is useful for situations like search suggestions, where you want to wait for the user to finish typing before fetching suggestions.

## Throttling 
    - Throttling limits the number of times a function is executed over a certain time period.

    - It ensures that the function is called at a controlled, steady rate, regardless of how frequently the event triggering the function occurs.

## Use Cases
    - Throttling is suitable for scenarios where you want to limit the frequency of function calls, like handling scroll events or resizing events. It helps avoid overloading the system with frequent updates.

# Debouncing and Throttling Interview Questions 

### Prerequsits : 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debouncing and Throttling</title>
    <style>
        body {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            background-color: #313131;
            color: #fff;
            text-align: center;
        }

        .increment_btn {
            padding: 10px;
        }
    </style>
</head>
<body>
    <button class="increment_btn">Increment</button>
    <p>Button pressed <span class="increment_pressed">0</span> Times</p>
    <p>Triggered <span class="increment_count">0</span> Times</p>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script-1.js"></script>
</body>
</html>
```

## Question 1 :   Create a button UI and add debounce as follows : 
#### a) Show "Button Pressed <X> Times" every time button is pressed 
#### b) Increase "Triggered <Y> Times" count after 800ms of debounce
```javascript
// Js file
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

// debounceCount returns a function
const debounceCount = _.debounce(() => {
    triggeredCount += 1;
    count.innerHTML = triggeredCount;
}, 800);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debounceCount();
});
```

## Question 2 : Create a button UI and add throttle as follows : 
#### a) Show "Button Pressed <X> Times" every time button is pressed
#### b) Increase "Triggered <Y> Times" count after 800ms of debounce
```javascript
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

// throttleCount returns a function
const throttleCount = _.throttle(() => {
    triggeredCount += 1;
    count.innerHTML = triggeredCount;
}, 800);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    throttleCount();
});
```

## Question 3 : Create Debounce() Polyfill Implementation.
```javascript
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

const myDebounce = (cb, d) => {
    let timer;

    return function (...args) {
        if (timer < d) {
            clearTimeout(timer);
        }
        
        timer = setTimeout(() => {
            cb(...args);
        }, d);
    }
}

const debounceCount = myDebounce(() => {
    triggeredCount += 1;
    count.innerHTML = triggeredCount;
}, 800);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debounceCount();
});
```

## Question 4 : Create Throttle() Polyfill Implementation.
```javascript
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
```