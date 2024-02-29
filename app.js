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

// Write a function to keep track of scores and determine a winner at the end of five iterations.
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    // Play five rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);

        // Get player's choice using prompt
        const playerChoice = prompt("Enter your choice (rock, paper, or scissors):");

        // Check to see if player canceled the prompt, and quit the game.
        if (playerChoice === null) {
            console.log("You canceled. Refresh to play.");
            return;
        }

        const computerChoice = getComputerChoice();

        console.log(`You chose: ${playerChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        // Play the round and update the scores
        const result = playRound(playerChoice, computerChoice);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    // Determine the winner of the game.
    if (playerScore > computerScore) {
        console.log(`You have won the game! You had ${playerScore} points and Computer had ${computerScore} points.`);
    } else if (playerScore < computerScore) {
        console.log(`You have lost the game. Computer had ${computerScore} points and you had ${playerScore} points.`);
    } else {
        console.log(`It's a tie! Computer and player both have ${playerScore}`);
    }
}

// Call the playGame function to start the game.
playGame();
