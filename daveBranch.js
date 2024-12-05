let userPick = "rock";
let computerPick = "scissors";
let playAgain = true;

let playAgain = true;

while (playAgain) {
  let result;
  let userScore = 0;
  let compScore = 0;

  if (userPick === computerPick) {
    result = "It's a draw! Each of you chose ${userPick}.";
  } else if (
    (userPick === "rock" && computerPick === "scissors") ||
    (userPick === "paper" && computerPick === "rock") ||
    (userPick === "scissors" && computerPick === "paper")
  ) {
    result = "You win! ${userPick} beats ${computerPick}.";
    userScore += 1;
    compScore -= 1;
  } else {
    result = "You lose! ${computerPick} beats ${userPick}.";
    userScore -= 1;
    compScore += 1;
  }

  alert(result);

  if (confirm("Do you want to play again?")) {
    playAgain = true;
  } else {
    playAgain = false;
    alert(Thanks for playing, your score is ${userScore});
  }
}
