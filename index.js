let userInput = "paper";
let computerInput = "paper";

function getWinner(playerMove, computerMove) {
  if (
    (playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "paper" && computerMove == "rock") ||
    (playerMove == "scissors" && computerMove == "paper")
  ) {
    console.log("win");
  } else if (playerMove == computerMove) {
    console.log("tie");
  } else {
    console.log("lose");
  }
}

// Higher-order function that accepts a callback and passes moves as arguments
function callbackEvent(callback, playerMove, computerMove) {
  callback(playerMove, computerMove); // Calls the callback with the necessary arguments
}

// Call callbackEvent, passing getWinner as the callback and the moves as arguments
callbackEvent(getWinner, userInput, computerInput);
