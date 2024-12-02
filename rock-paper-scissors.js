console.log("Hello, World!");

function getComputerChoice() {
    
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor((Math.random() * 3));

    return choices[randomIndex];

}

function getHumanChoice() {
    
    const choices = ["rock", "paper", "scissors"];
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    }
    else {
        console.log("Not a valid choice. Try again.")
        getHumanChoice();
    }

}

function playRound(humanChoice, computerChoice) {
    
    console.log("Computer choice: ", computerChoice);
    console.log("Your choice: ", humanChoice);
    if (humanChoice === computerChoice) {
        //console.log("Tie. Choose again.");
        alert("Tie. Choose again.");
        getHumanChoice();
        getComputerChoice();
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            //console.log("You lose! Paper beats Rock.");
            alert("You lose! Paper beats Rock.");
            computerScore += 1;
        }
        else {
            //console.log("You win! Rock beats Scissors.");
            alert("You win! Rock beats Scissors.");
            humanScore += 1;
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            //console.log("You lose! Scissors beats Paper.");
            alert("You lose! Scissors beats Paper.");
            computerScore += 1;
        }
        else {
            //console.log("You win! Paper beats Rock.");
            alert("You win! Paper beats Rock.");
            humanScore += 1;
        }
    }
    else { // scissors
        if (computerChoice === 'rock') {
            //console.log("You lose! Rock beats Scissors.");
            alert("You lose! Rock beats Scissors.");
            computerScore += 1;
        }
        else {
            //console.log("You win! Scissors beats Paper.");
            alert("You win! Scissors beats Paper.");
            humanScore += 1;
        }
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(numRounds) {

    let computerScore = 0;
    let humanScore = 0;

    
}