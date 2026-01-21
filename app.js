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
    let result = "";

    if (humanChoiceLower === computerChoiceLower) {
        result = "It's a tie!";
    } else if (humanChoiceLower === "rock" && computerChoiceLower === "scissors"){
        humanScore++;
        result = "You win! Rock beats scissors!";
    } else if (humanChoiceLower === "paper" && computerChoiceLower === "rock"){
        humanScore++;
        result = "You win! Paper beats rock!";
    } else if (humanChoiceLower === "scissors" && computerChoiceLower === "paper"){
        humanScore++;
        result = "You win! Scissors beats paper!";
    } else if (humanChoiceLower === "rock" && computerChoiceLower === "paper") {
        computerScore++;
        result = "You lose! Paper beats rock!";
    } else if (humanChoiceLower === "paper" && computerChoiceLower === "scissors"){
        computerScore++;
        result = "You lose! Scissors beats paper!";
    } else if (humanChoiceLower === "scissors" && computerChoiceLower === "rock"){
        computerScore++;
        result = "You lose! Rock beats scissors!";
    } else {
        result = "Invalid choice! Please choose rock, paper, or scissors.";
    }   
    console.log(result);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(`You chose: ${humanChoice}`);
console.log(`Computer chose: ${computerChoice}`);
playRound(humanChoice, computerChoice);
console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);