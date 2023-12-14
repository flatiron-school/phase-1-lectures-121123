console.log("Hello World");

// * DOM-events

// ? What is dom events?
// * DOM events are actions that occur as a result of a user action or browser state change.
// Examples of DOM events:
// A mouse click -> click
// Hovering over an element -> mouseover
// Pressing the enter key -> keypress
// A page loading -> load
// A form being submitted -> submit

// What is an event listener?
// An event listener is a procedure or function in a computer program that waits for an event to occur.
// ! addEventListener() method attaches an event handler to the specified element

let count = 0;

let button = document.getElementById("count-button");
let displayCount = document.getElementById("count");
let body = document.querySelector("body");

function onKeyDown(e) {
  console.log(e.code);
  if (e.code === "Space") {
    let div = document.createElement("div");
    div.style.width = "600px";
    div.style.height = "200px";
    div.style.border = "1px solid blue";

    body.append(div);

    div.addEventListener("dblclick", function () {
      div.style.backgroundColor = "blue";
    });
  }
}

// onKeyDown({
//   name: "Key down",
//   code: "Enter",
// });

function onButtonClick() {
  count++;
  displayCount.textContent = count;
  console.log("The button has been clicked " + count + "  time(s)");
}

function onMouseOver() {
  button.style.backgroundColor = "red";
}

function onMouseLeave() {
  button.style.backgroundColor = "transparent";
}

button.addEventListener("click", onButtonClick);
button.addEventListener("mouseenter", onMouseOver);
button.addEventListener("mouseleave", onMouseLeave);

body.addEventListener("keydown", onKeyDown);

// function addEventListener(event, callback) {
//     if (event) {
//         callback(eventObject)
//     }
// }

// ? Syntax
// element.addEventListener(event, function);
// addEventListener takes two arguments: the event and the function that will be called when the event fires(callback function). Basically, it's saying "Hey, when this event happens, do this thing."

// Example

// ! Exercise
// create three buttons with the text "Red", "Green", "Blue". When you click on the button, the background color of the page should change to the color of the button.

function generateRandomColor() {
  let random = Math.floor(Math.random() * (256 - 0) + 0);
  let random2 = Math.floor(Math.random() * (256 - 0) + 0);
  let random3 = Math.floor(Math.random() * (256 - 0) + 0);

  return `rgb(${random}, ${random2}, ${random3})`;
}

let redButton = document.createElement("button");
redButton.textContent = "Red";

let greenButton = document.createElement("button");
greenButton.textContent = "Green";

let blueButton = document.createElement("button");
blueButton.textContent = "Blue";

body.append(greenButton, blueButton, redButton);

redButton.addEventListener("click", function () {
  console.log("Clicking!");
  console.log();
  body.style.backgroundColor = generateRandomColor();
});

greenButton.addEventListener("click", function () {
  body.style.backgroundColor = "green";
});

blueButton.addEventListener("click", function () {
  body.style.backgroundColor = "blue";
});

function changeBackGround(e) {
  console.log(e);
  body.style.backgroundColor = e.target.textContent;
}
