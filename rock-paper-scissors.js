function getComputerChoice() {
    
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor((Math.random() * 3));

    return choices[randomIndex];

}

// function for playing each round
function playRound(humanChoice, computerChoice) {

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

// display scores, updates within the click event listener
const results = document.createElement("p");
results.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}`;
results.setAttribute("style", "font-size: 24px; font-weight: bold;");
document.body.appendChild(results);

// attaching listeners to group of buttons
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        humanSelection = button.textContent;
        computerSelection = getComputerChoice();

        // create divs for displaying results
        const resultSelections = document.createElement("div");
        resultSelections.textContent = `Your selection: ${humanSelection}.\nComputer selection: ${computerSelection}.`;
        // append to webpage body
        document.body.appendChild(resultSelections);

        // call playRound
        playRound(humanSelection, computerSelection);

        // update scores
        results.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}`;

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