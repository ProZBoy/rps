let humanScore = 0;
let computerScore = 0;

playGame()


function playGame(times = 1) {
    while (times <= 5) {
        times++
        playRound()
    }
    console.log("Game over!\nYour score: " + humanScore + "\nComputer score: " + computerScore)
}

function getComputerChoice() {
    const randomNumber = Math.random()

    if (randomNumber < 0.34) {
        return "rock"
    }   else if (randomNumber < 0.67) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let c = prompt("Enter your choice:").toLowerCase();
    return c
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        return console.log("It's a tie!")
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            return console.log("You Lose! Paper beats rock.")
        } else if (computerChoice === "scissors") {
            humanScore++;
            return console.log("You win! Rock beats scissors.")
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            return console.log("You win! Paper beats rock.")
        } else if (computerChoice === "scissors") {
            computerScore++;
            return console.log("You lose! Scissors beats paper.")
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            return console.log("You Lose! Rock beats scissors.")
        } else if (computerChoice === "paper") {
            humanScore++;
            return console.log("You win! Scissors beats paper.")
        }
    }
}