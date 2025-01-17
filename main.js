"use strict";
// Question 103: Write a function that returns a random boolean value, true or false.
function getRandomBoolean() {
    return Math.random() > 0.5;
}
console.log(getRandomBoolean());
console.log("\n");
// Question 104: Create a function that generates a random hexadecimal color code.
function getRandomHexColor() {
    const color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
    return color;
}
console.log(getRandomHexColor());
console.log("\n");
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
