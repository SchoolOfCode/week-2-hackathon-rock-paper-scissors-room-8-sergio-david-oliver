// OLIVER CODE

let playAgain = true;
let userScore = 0;
let compScore = 0;

alert(
  "Welcome to our rock, paper scissors game! The winner is the first to get to 5, good luck!"
);

while (playAgain) {
  let result;

  function generateUserInput() {
    let choice = prompt(
      "Please type rock, paper or scissors below to make your move."
    );
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
      if (choice === null) {
        alert(`Thanks for playing! Your score is ${userScore}`);
        break; // this just means that if the user clicks cancel instead of ok then the whole thing stops. Later can link this up with David's code.
      } else {
        alert("Sorry, I didn't catch that. Please try again.");
        choice = prompt(
          "Type either rock, paper or scissors below to make your move."
        );
      }
    }
    return choice;
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
    return randomChoice;
  } //generates random compouter move.

  let userInput = generateUserInput();
  let computerInput = generateCompInput();

  console.log(userInput);
  console.log(computerInput);

  // SERGE CODE

  // Ruleset for regular game
  let rpsRules = {
    rock: ["scissors"],
    scissors: ["paper"],
    paper: ["rock"],
  };

  // Ruleset for lizard spock, can implement later
  /* let rpslsRules = {
  rock: ["scissors", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
  scissors: ["lizard", "paper"],
  paper: ["rock", "spock"],
}; */

  function getWinner(playerMove, computerMove, rules) {
    if (rules[playerMove].includes(computerMove)) {
      result = `You win! ${userInput} beats ${computerInput}.`;
      userScore += 1;
      compScore -= 1;
      console.log("win");
    } else if (playerMove == computerMove) {
      result = `It's a draw! Each of you chose ${userInput}.`;
      console.log("tie");
    } else {
      result = `You lose! ${computerInput} beats ${userInput}.`;
      userScore -= 1;
      compScore += 1;
      console.log("lose");
    }
  }

  // Higher-order function that accepts a callback and passes moves as arguments
  function callbackEvent(callback, playerMove, computerMove, rules) {
    callback(playerMove, computerMove, rules); // Calls the callback with the necessary arguments
  }

  // Initiates logic for regular game
  // Call callbackEvent, passing getWinner as the callback and the moves as arguments
  callbackEvent(getWinner, userInput, computerInput, rpsRules);

  // DAVID CODE

  alert(result);

  if (userScore === 5) {
    alert("Congratulations, you win with a score of 5!");
    playAgain = confirm("Do you want to play again from the start?");
    if (playAgain) {
      userScore = 0;
      compScore = 0;
    }
  } else if (compScore === 5) {
    alert("Sorry, you lose. The computer has won with a score of 5.");
    playAgain = confirm("Do you want to play again from the start?");
    if (playAgain) {
      userScore = 0;
      compScore = 0;
    }
  }
}
