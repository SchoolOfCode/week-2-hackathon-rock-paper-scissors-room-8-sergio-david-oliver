let result = "";
let score = 0;
let userPick = "rock";
let computerPick = "scissors";

if (userPick === computerPick) {
  result = `It's a draw! Each of you chose ${userPick}.`;
} else if (
  (userPick === "rock" && computerPick === "scissors") ||
  (userPick === "paper" && computerPick === "rock") ||
  (userPick === "scissors" && computerPick === "paper")
) {
  result = `You win! ${userPick} beats ${computerPick}.`;
  score += 1;
} else {
  result = `You lose! ${computerPick} beats ${userPick}.`;
  score -= 1;
}
console.log(result);
