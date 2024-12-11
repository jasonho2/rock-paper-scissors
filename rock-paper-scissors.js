function getComputerChoice() {
    
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor((Math.random() * 3));

    return choices[randomIndex];

}

// function for playing each round
function playRound(humanChoice, computerChoice) {
    
    console.log("Computer choice: ", computerChoice);
    console.log("Your choice: ", humanChoice);

    if (humanChoice === computerChoice) {
        const result = document.createElement("div");
        result.textContent = "Tie. You both picked " + humanChoice + ".";
        document.body.appendChild(result);
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            const result = document.createElement("div");
            result.textContent = "You lose! Paper beats Rock.";
            document.body.appendChild(result);
            computerScore += 1;
        }
        else {
            const result = document.createElement("div");
            result.textContent = "You win! Rock beats Scissors.";
            document.body.appendChild(result);
            humanScore += 1;
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            const result = document.createElement("div");
            result.textContent = "You lose! Scissors beats Paper.";
            document.body.appendChild(result);
            computerScore += 1;
        }
        else {
            const result = document.createElement("div");
            result.textContent = "You win! Paper beats Rock.";
            document.body.appendChild(result);
            humanScore += 1;
        }
    }
    else { // scissors
        if (computerChoice === 'rock') {
            const result = document.createElement("div");
            result.textContent = "You lose! Rock beats Scissors.";
            document.body.appendChild(result);
            computerScore += 1;
        }
        else {
            const result = document.createElement("div");
            result.textContent = "You win! Scissors beats Paper.";
            document.body.appendChild(result);
            humanScore += 1;
        }
    }

}

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

// initialize human and computer scores
let computerScore = 0;
let humanScore = 0;

// attaching listeners to group of buttons
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        humanSelection = button.textContent;
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        // create divs for displaying results
        const resultHumanSelection = document.createElement("div");
        resultHumanSelection.textContent = 'Your selection: ' + humanSelection + '.';
        // append to webpage body
        document.body.appendChild(resultHumanSelection);

        const resultComputerSelection = document.createElement("div");
        resultComputerSelection.textContent = 'Computer selection: ' + computerSelection + '.';
        // append to webpage body
        document.body.appendChild(resultComputerSelection);

        // display scores
        const results = document.createElement("p");
        results.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}`;
        document.body.appendChild(results);

        // inform winner
        if (humanScore === 5) {
            const humanWinMessage = document.createElement("p");
            humanWinMessage.textContent = "You win! Thanks for playing. Refresh the page to play again.";
            document.body.insertBefore(humanWinMessage, rockButton);
            document.body.removeChild(rockButton);
            document.body.removeChild(paperButton);
            document.body.removeChild(scissorsButton);
        } else if (computerScore === 5) {
            const computerWinMessage = document.createElement("p");
            computerWinMessage.textContent = "You lose! Better luck next time. Refresh the page to play again.";
            document.body.insertBefore(computerWinMessage, rockButton);
            document.body.removeChild(rockButton);
            document.body.removeChild(paperButton);
            document.body.removeChild(scissorsButton);
        }

    });
});