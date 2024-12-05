let userInput = "lizard";
let computerInput = "lizard";

let rpsRules = {
  rock: ["scissors"],
  scissors: ["paper"],
  paper: ["rock"],
};

let rpslsRules = {
  rock: ["scissors", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
  scissors: ["lizard", "paper"],
  paper: ["rock", "spock"],
};

// Rather than having repeating || if statements to declare win conditions,
// we are instead storing win conditions in a object as key:value pairs
// storing the value inside an array. So we can instead search for the value with .includes
// this is good because it saves us a lot of lines of code, and makes the code a lot more dynamic
// as now we can implement scalability and leave the function for deciding who wins the same

function getWinner(playerMove, computerMove, rules) {
  if (rules[playerMove].includes(computerMove)) {
    console.log("win");
  } else if (playerMove == computerMove) {
    console.log("tie");
  } else {
    console.log("lose");
  }
}

// Higher-order function that accepts a callback and passes moves as arguments
function callbackEvent(callback, playerMove, computerMove, rules) {
  callback(playerMove, computerMove, rules); // Calls the callback with the necessary arguments
}

// Call callbackEvent, passing getWinner as the callback and the moves as arguments

// Initiates logic for regular game
/* callbackEvent(getWinner, userInput, computerInput, rpsRules); */

// Initiates logic for incorporating lizard and spock into the game
callbackEvent(getWinner, userInput, computerInput, rpslsRules);
