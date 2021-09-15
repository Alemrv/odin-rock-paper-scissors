function computerPlay(){
    let computerAnswers = ["rock", "paper", "scissors"];
    let selectRandomNumber = Math.floor(Math.random()*3);
    return computerAnswers[selectRandomNumber];
}

function playRound(playerSelection, computerSelection){

    switch (true) {
        case playerSelection == "rock" && computerSelection == "paper":
            alert("you lose, paper beats rock");
            computerScore++;
            break;
    
        case playerSelection == "paper" && computerSelection == "rock":
            alert("you win!!, paper beats rock");
            playerScore++;
            break;

        case playerSelection == "rock" && computerSelection == "scissors":
            alert("you win!!, rock beats scissors");
            playerScore++;
            break;
        
        case playerSelection == "scissors" && computerSelection == "rock":
            alert("you lose, rock beats scissors");
            computerScore++;
            break;

        case playerSelection == "paper" && computerSelection == "scissors":
            alert("you lose, scissors beats paper");
            computerScore++;
            break;
            
        case playerSelection == "scissors" && computerSelection == "paper":
            alert("you win!!, scissors beats paper");
            playerScore++;
            break;
        default:
            alert("It's a draw!");    
    }
}

function game(){

    for (let index = 0; index < 5; index++) {

        let prompt = window.prompt("Choose");
        playerSelection = prompt.toLowerCase();

        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection == "scissors") {
            
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            alert("Score is: " + playerScore +" for the player " + computerScore + " for the computer");

        } else {
            --index;
            alert("please enter a correct game answer");
            
        }

    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;

game();

/*arreglar el tema de string toLowercase*/