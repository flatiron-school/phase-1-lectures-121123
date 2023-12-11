// Deliverables

// JavaScript Fundamentals and Data Structures Workshop

// Workshop Introduction:
// In this workshop, we'll cover JavaScript fundamentals and data structures to help you build a strong foundation.
// Let's get started!

// Variables and Data Types

// string -> group of characters or texts -> ex. "abc" or '123'
// integer -> a real number -> ex. 10
// float -> decimal point numbers -> 3.14
// boolean -> true/false, 1/0
// object -> grouping of labels and values, key and a value pair. ex. animal = { name: "Lion", size: "large" }
// array -> a list a data -> [1, 2, 3] or ["abc", "def"] or [1, "a", true]
// to declare a variable -> const or let
// const cannot be reassigned -> constant
// let is changable

// 1. Declare a variable 'age' and assign your age to it.
let age = 26;
// 2. Declare a constant 'name' and assign your name to it.
const name = "mohammad";
// 3. Declare a variable 'isStudent' and assign a boolean value to it.
let isStudent = false;
// 4. Declare a variable 'score' and assign a numeric value to it.
let score = 80;
// 5. Declare an array 'fruits' and add a few different fruit names to it.
let fruits = ["apple", "banana", "mango", "pineapple"];
// 6. Declare an object 'person' with properties 'name' and 'age'.
let person = {
  name: name,
  age: age,
  isStudent: isStudent,
};

// Console Output

// 7. Use 'console.log' to display a welcome message to the console.
console.table(person);
// ? Math Operations

// addition: +
// substraction: -
// division: /
// multiplication: *
// remainder (modular) : %
// exponent or power: **

// logical operators:
// and and or: && , ||
// == or ===: equal to (loose equal), strict equal
// ! => not or inverse
// !== -> not equal

// 8. Perform addition and multiplication operations on two numbers and store the results in variables.

let num1 = 23;
let num2 = 40;

let sum = num1 + num2;
let product = num1 * num2;

// Strings

// 9. Create a string variable 'greeting'
let greeting = "Good morning!";
// 10. Use string interpolation to create a message by combining 'greeting' and 'name'.
console.log(`${greeting} ${name}`);

// Conditional Statements

// 11. Write an 'if' statement to check if your age is greater than or equal to 18.

if (age >= 18) {
  console.log("You are an adult!");
} else if (age < 15) {
  console.log("You are too young!");
}

// 12. Use 'if-else' to display different messages based on isStudent value.

// if (isStudent) {
//   console.log("Welcome to Flatiron!");
// } else {
//   console.log("Welcome!");
// }

// a. If isStudent is true, display 'Welcome to Flatiron!'
// b. If isStudent is false, display 'Welcome!'

// Switch Statements

// Use a switch statement to display different messages based on the value of 'score'.
switch (score) {
  case 80:
    console.log("You got an A");
    break;

  default:
    console.log("You did not take the exam");
}

// Ternary Operator

isStudent && age >= 18
  ? console.log("Hello world!")
  : name === "John"
  ? console.log("Hello john")
  : null;

if (isStudent && age >= 18) {
  console.log("Hello world!");
} else if (name === "John") {
  console.log("Hello john");
} else {
  null;
}

//   ? console.log("Welcome to Flatiron!")
//   : age >= 28
//   ? console.log("Hello")
//   : console.log("HI");

// Use a ternary operator to display different messages based on the value of 'score'.

// Loops

// 13. Use a 'for' loop to print numbers from 1 to 5.
//   (start)
//iterator variable  end point      increment
// for (let i = 1;       i <= 5;       i+=2){
//     console.log(i)
// }

// 14. Use a 'while' loop to print numbers from 1 to 5.

// let i = 1;

// while (i < 6) {
//     console.log(i)
//     i++;
// }

// for of / for in

// Arrays

// 15. Declare an array 'colors' with a few color names.

let colors = ["blue", "green", "purple", "red", "black", "orange"];

// for (let color of colors) {
//   console.log(color);
// }

// for (let index in colors) {
//   console.log(colors[index]);
// }

// ?  for in => only iterate over an array or an object
// ?  for of => only iterate over a list or array

// console.log(person["name"], person["age"]);

// for (let key in person) {
//   console.log(person[key]);
// }

// Loop through the 'colors' array and print each color to the console.
// Loop through the 'colors' array and print the index of each color to the console.

// ! difference between 'for', 'for...of', and 'for...in' loops

// 16. Add a new color to the 'colors' array.

colors.push("Yellow");

console.log(colors);

// 17. Access the first and last color in the array.

// access the color at a specific index.

// find the index of a color.

// console.log(colors.indexOf("red"));
// console.log(colors.includes("Purple"));

// check if a color exists in the 'colors' array.
// remove the last color from the 'colors' array.

// colors.pop();
// remove the first color from the 'colors' array.

colors.shift();
colors.unshift("Indigo");

// console.log(colors.slice(0, 3));

colors.splice(0, 3);
