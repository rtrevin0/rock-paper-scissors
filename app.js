let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const number = Math.random();
    if (number < 0.34) {
        return "rock";
    } else if (number > 0.33 && number < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceLower = humanChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();

    if (humanChoiceLower === computerChoiceLower) {
        return "It's a tie!";
    } else if (humanChoiceLower === "rock" && computerChoiceLower === "scissors"){
        humanScore++;
        return "You win! Rock beats scissors!";
    } else if (humanChoiceLower === "paper" && computerChoiceLower === "rock"){
        humanScore++;
        return "You win! Paper beats rock!";
    } else if (humanChoiceLower === "scissors" && computerChoiceLower === "paper"){
        humanScore++;
        return "You win! Scissors beats paper!";
    } else if (humanChoiceLower === "rock" && computerChoiceLower === "paper") {
        computerScore++;
        return "You lose! Paper beats rock!";
    } else if (humanChoiceLower === "paper" && computerChoiceLower === "scissors"){
        computerScore++;
        return "You lose! Scissors beats paper!";
    } else if (humanChoiceLower === "scissors" && computerChoiceLower === "rock"){
        computerScore++;
        return "You lose! Rock beats scissors!";
    } else {
        return "Invalid choice! Please choose rock, paper, or scissors.";
    }   
}

console.log(getComputerChoice());
console.log(getHumanChoice());