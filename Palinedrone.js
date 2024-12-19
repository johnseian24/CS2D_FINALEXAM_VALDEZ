// palindrome.js
const readlineSync = require("readline-sync");
// Prompt the user for two words
const word1 = readlineSync.question("Enter the first word (RACECAR): ");
const word2 = readlineSync.question("Enter the second word (RECORDER): ");
// Function to reverse a string
function reverseString(str) 
{
  return str.split.reverse.join;
}
// Check if a word is a palindrome
function isPalindrome(word) {
  const reversed = reverseString(word);
  console.log(`Original String: {word}`);
  console.log(`Reversed String: {reversed}`);
  return word === reversed;
}
// Check and log results for both words
console.log(`nChecking first word: {word1}`);
const isWord1Palindrome = isPalindrome(word1);
console.log(`Is "{word1}" a palindrome? {isWord1Palindrome}`);
console.log(`nChecking second word: {word2}`);
const isWord2Palindrome = isPalindrome(word2);
console.log(`Is "{word2}" a palindrome? {isWord2Palindrome}`);
