// DOM manipulation
// ! What is the DOM?
// * Document Object Model
// * Structured representation of an HTML document
// * The DOM is used to connect webpages to scripts like JavaScript
// * For each HTML element, there is an object in the DOM that we can access and interact with
// * DOM is a tree of nodes/elements created by the browser. Each nodes is a child of another node and so on.
// https://www.w3schools.com/js/pic_htmltree.gif

// ! DOM Selectors
// * Single element selectors: getElementById, querySelector

// * Multiple element selectors: getElementsByClassName, getElementsByTagName, querySelectorAll

// ! Creating Elements
// * document.createElement()
// * element.appendChild()
// * element.append()

// ! Adding Classes and IDs
// * element.className
// * element.id

// ! Changing Attributes
// * textContent
// * innerText
// * innerHTML
// * value
// * src

// ! Changing Styles
// * backgroundColor
// * color
// * fontSize

// ? DOM Excercise
// * Create an array of color names
// * Create an unordered list and add list items for each color in the array and append to the DOM (use foreach)
// * The color of the text for each list item should be the color of the array item

let colors = ["red", "green", "blue", "pink", "purple"];

let ul = document.createElement("ul");

let body = document.querySelector("body");
body.append(ul);

for (let color of colors) {
  let li = document.createElement("li");
  li.textContent = color;
  li.style.color = color;

  ul.append(li);
}

// ! Student excercise

let user = {
  name: "Sally",
  age: 25,
  email: "sally@aol.com",
  favoriteFood: "pizza",
};

// * must be done in JavaScript:
// * create a div with a class "user-card", create 'p' tags to display the user's name, age, email, and favoriteFood in the div.

// step 1: create the div
let userDiv = document.createElement("div");

// step 2: assign the class user-card to the div
userDiv.className = "user-card";

// step 3: append to the body
body.append(userDiv);

//step 4: create p tags [either iterating / manually]

//  easier solution:
// let nameP = document.createElement("p");
// nameP.textContent = user.name;

// let ageP = document.createElement("p");
// ageP.textContent = user.age;

// let emailP = document.createElement("p");
// emailP.textContent = user.email;

// let foodP = document.createElement("p");
// foodP.textContent = user.favoriteFood;

// best solution

for (let key in user) {
  console.log(key);
  let p = document.createElement("p");
  p.textContent = user[key];
  userDiv.append(p)
}

// step 5: appending the p tags to the div

// userDiv.append(nameP, ageP, emailP, foodP);
