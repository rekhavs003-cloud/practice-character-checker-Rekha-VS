const input = require('readline-sync');

// This line asks the question
let userPhrase = input.question("Enter a word or phrase: ");

// This line asks for the number
let index = Number(input.question("Enter an index number: "));

// This line finds the character
let character = userPhrase[index];

// This line prints the answer to the screen
console.log("The character at that index is: " + character);
