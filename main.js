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

let userScore = 4;
let compScore = 0;

alert("welcome to our rock, paper scissors game!");


function generateUserInput() {
    let choice = prompt("Please type rock, paper or scissors below to make your move.");
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        if (choice === null) {
            alert(`Thanks for playing! Your score is ${userScore}`)
            break; // this just means that if the user clicks cancel instead of ok then the whole thing stops. Later can link this up with David's code.
        } else {
            alert("Sorry, I didn't catch that. Please try again.");
            choice = prompt("Type either rock, paper or scissors below to make your move.");
        }
    } return choice
}

// user is prompted for an input. if they don't type rock, paper or scissors exactly then they are asked again.


function generateCompInput() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let randomChoice = "";
    if (randomNum === 1) {
        randomChoice = "rock";
    } else if (randomNum === 2) {
        randomChoice = "paper";
    } else {
        randomChoice = "scissors";
    }
    return randomChoice
} //generates random compouter move.

let userInput = generateUserInput()
let compInput = generateCompInput()

console.log(userInput + " user");
console.log(compInput + " comp");