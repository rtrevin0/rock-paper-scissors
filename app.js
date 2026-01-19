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

console.log(getComputerChoice());
console.log(getHumanChoice());