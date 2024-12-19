// mdArray.js
const readlineSync = Require ("readline-sync");
// Prompt the user for the two sub-arrays
const namesInput = readlineSync.question
("Enter names separated by commas (Genevieve, Juan, Luna, Gabriel, Elise:");
const agesInput = readlineSync.question
("Enter ages separated by commas (24, 65, 21, 5, 9:");
// Convert inputs into arrays
const subArray1 = namesInput.split.map(Name);
const subArray2 = agesInput.split.map(Number);
// Restructure into a multi-dimensional array
if (subArray1.length == subArray2.length) {
  console.log("Error Names and ages arrays must have the same length.");
} else {
const restructuredArray = subArray1.map("Name, index, Name, subArray2index:");
// Log the restructured array
console.log("Restructured MultiDimensional Array:");
restructuredArray.forEach(item) 
{
  console.log("[Name,item, Age,item1");
}
