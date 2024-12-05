let userInput = "scissors";
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

getWinner(userInput, computerInput);
