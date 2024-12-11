function getComputerChoice() {
    
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor((Math.random() * 3));

    return choices[randomIndex];

}
/*
function getHumanChoice() {
    
    const choices = ["rock", "paper", "scissors"];
    let choice = prompt("Choose rock, paper, or scissors").toLowerCase();

    // Validate input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
    }

    return choice;

}

function playGame(numRounds) {

    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
    
        console.log("Computer choice: ", computerChoice);
        console.log("Your choice: ", humanChoice);

        if (humanChoice === computerChoice) {
            //console.log("Tie. Choose again.");
            alert("Tie. You both picked " + humanChoice + ".");
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

    for (let i = 0; i < numRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log("Human score: ", humanScore);
        console.log("Computer score: ", computerScore);
    }

    if (computerScore === humanScore) {
        alert("Tie game! No winner.");
    }
    else if (computerScore > humanScore) {
        alert("You lose! Try again next time.");
    }
    else { // human winner
        alert("You win! See you next time.");
    }

}

let numRounds = prompt("Enter the number of rounds of Rock, Paper, Scissors you would like to play.");

playGame(numRounds);

*/

// create buttons
const rockButton = document.createElement("button");
rockButton.textContent = "rock";
// append button to body
document.body.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "paper";
// append button to body
document.body.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";
// append button to body
document.body.appendChild(scissorsButton);

