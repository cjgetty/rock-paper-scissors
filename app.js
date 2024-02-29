// console.log(playRound(playerSelection, computerSelection));

// Create a function to get computer's choice. This function should randomly select one of 'Rock', 'Paper', or 'Scissors' and return it.

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; // define the choices in an array
    const randomIndex = Math.floor(Math.random() * choices.length); // choose a random number from the choices array
    return choices[randomIndex]; // return the randomIndex number from the array
}

// Write a function to play a single round. This function will take two parameters - playerSelection and computerSelection. It will compare these choices and return a string indicating the result of the round.

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Convert player's choice to lowercase text
    // Compare player's choice to computer's choice
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Test the functions. You can now test these functions by calling them and logging the results to the console.

const playerChoice = "rock"; // You can change this to test different scenarios.
const computerChoice = getComputerChoice();

console.log(`Player chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(playRound(playerChoice, computerChoice));
