console.log("hi")
// 1. Scoring and input variables - ollie

/* 1. Scoring and input variables Psuedocode:

-Create empty variables for score (player score and computer)
-Create first prompt for the user to select their move (either as multiple choice or typing out)
-Create an object with 3 options (rock, paper, scissors)

let array = [rock, paper, scissors]
            [0,     1,      2]
            Math.floor(Math.random(3))

-Once a random number has been generater, come up with a nested if statement that assigns the computer's move */

let userScore = 0;
let compScore = 0;


alert("welcome to our rock, paper scissors game!");
let userInput = prompt("Please type rock, paper or scissors below to make your move.");

while (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
    if (userInput === null) {
        break; // this just means that if the user clicks cancel instead of ok then the whole thing stops. Later can link this up with David's code.
    } else {
        alert("Sorry, I didn't catch that. Please try again.");
        userInput = prompt("Type either rock, paper of scissors below to make your move.");
    }
}

console.log(userInput); 
// user is prompted for an input. if they don't type rock, paper or scissors exactly then they are asked again.

