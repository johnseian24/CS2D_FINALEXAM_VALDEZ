// sortArray.js
const readlineSync = require("readline-sync");
// Prompt the user for arrays
const numbersInput = readlineSync.question
("Enter numbers separated by commas (24, 65, 21, 5, 9, 32, 42, 80, 57): ");
const namesInput = readlineSync.question
("Enter names separated by commas (Zenvo, Erica, Jordie, Alicia, Redon):" );
// Convert inputs into arrays 
const numbers = numbersInput.split(",").map(Number);
const names = namesInput.split(",").map((name) => name.trim());
// Merge the arrays
const mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);
// Sort numbers in reverse order
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers sorted in reverse order:", sortedNumbers);
// Sort names alphabetically
const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
console.log("Names sorted alphabetically:", sortedNames);
