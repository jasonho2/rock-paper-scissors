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
        console.log(choice);
    }
    else {
        console.log("Not a valid choice. Try again.")
        getHumanChoice();
    }
}