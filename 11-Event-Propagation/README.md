# Event Propagation

### Question 1 : What is event propagation?
    - Movement of Events through the DOM

    - Event propagation in JavaScript is a mechanism that dictates how events travel through the Document Object Model (DOM) when an event occurs, eventually reaching the target element and possibly executing further actions based on the event. 

### Event Propagation happens in three phases :

__Phase 1 : Event Capturing or Trickling__ 

    This is the first phase in the event propagation process. When an event is triggered, it first travels from the root of the DOM tree down towards the target element. During this phase, event listeners can be executed if they are set to capture mode​​.

__Phase 2 : Targeting__

    This is the phase where the event reaches the target element on which the event was triggered. Any event handlers attached to the target element are executed during this phase​​.

__Phase 3 : Event Bubbling__

    After targeting, the event traces back its path and moves back up to the root of the DOM. It is in this phase that the event handlers execute. JavaScript executes the associated event handlers in order as the event moves up the DOM tree.

### HTML file : 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Propagation</title>
    <style>
        body *{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            margin: 10px;
            padding: 10px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <h1>Event Propagation</h1>

    <div>
        DIV
        <form action="">
            FORM
            <button>
                BUTTON
            </button>
        </form>
    </div>
    <script src="script-1.js"></script>
</body>
</html>
```

### Question 2 : What is event bubbling ?
```javascript
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", () => {
    alert("div");
});

form.addEventListener("click", () => {
    alert("form");
});

button.addEventListener("click", () => {
    alert("button");
});
```
NOTE : There are few events which don't bubble such as focus, blur etc

### Question 3 : event.target vs this.target vs event.currentTarget
```javascript
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", func);
form.addEventListener("click", func);
button.addEventListener("click", func);

function func(event) {
    alert("currentTarget : " + event.currentTarget.tagName + ", target = " + event.target.tagName + ", this=" + this.tagName);
}
```
NOTE : event.target only targets the element which is the origin of the bubbling.

### Question 4 : What is Event Capturing / Trickling ?
```javascript
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", () => {
    alert("div");
},{capture:true});

form.addEventListener("click", () => {
    alert("form");
},{capture:true});

button.addEventListener("click", () => {
    alert("button");
},{capture:true});
```

### Question 5 : How to stop bubbling or capturing ?
```javascript
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", (event) =>  {
  alert("div");
});

form.addEventListener("click", (event) => {
    event.stopPropagation();
  alert("form");
});

button.addEventListener("click", (event) => {
  alert("button");
});
```

### Question 6 : What is event delegation ?
__Required HTML__ : 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Propagation</title>
    <style>
        .products {
            display: grid;
            grid-template-columns: 100px 100px 100px;
            row-gap: 10px;
            column-gap: 20px;
        }

        span {
            width: 100px;
            height: 100px;
            background-color: bisque;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="products">
        <span class="mobile">mobile</span>
        <span class="Headphone">Headphone</span>
        <span class="laptop">laptop</span>
        <span class="speaker">speaker</span>
        <span class="USB Dock">USB Dock</span>
        <span class="Tripod">Tripod</span>
    </div>
    <script src="script-1.js"></script>
</body>
</html>
```

__JavaScript__ :
```javascript
document.querySelector(".products").addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
        window.location.href += "/" + event.target.className;
    }
});
```

### Question 7 : What is the output ?
```javascript
// When clicked on "button", frist "from" alert should trigger then "button" alert and lastly "div" alert.

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function (event) {
  alert("div");
});

form.addEventListener("click", function (event) {
  alert("form");
});

button.addEventListener("click", function (event) {
  alert("button");
});
```
NOTE : Since `button` is wrapped under the `form` tag, we should add `{capture: true}` inside the `form` event, so that the `form` alert would be triggered as it is capturing, then the `button` alert goes off as the result of capturing and also it is wrapped under form tag and lastly `div` alert goes off.

### Question 8 : Create a Modal which closes by clicking on negative space
__Required HTML__ : 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }

        .modalContainer {
            display: none;
            position: absolute;
            top: 0;
            background-color: rgba(221, 221, 221, 0.5);
            width: 100vw;
            height: 100vh;
            justify-content: center;
            align-items: center;
        }

        .modal {
            width: 500px;
            height: 400px;
            background-color: white;
            padding: 20px;
            box-shadow: 0 0 5px grey;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <button class="modalButton">open modal</button>

    <div class="modalContainer">
        <div class="modal">Modal Content</div>
    </div>

    <script src="Modal.js"></script>
</body>
</html>
```

__JavaScript__ :
```javascript
const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

button.addEventListener("click", () => {
    toggleModal(true);
});

function toggleModal(toggle) {
    container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click", (e) => {
    if (e.target.className === "modalContainer") {
        toggleModal(false);
    } 
});
```