function computerPlay(){
    let computerAnswers = ["rock", "paper", "scissors"];
    let selectRandomNumber = Math.floor(Math.random()*3);
    return computerAnswers[selectRandomNumber];
}

function playRound(playerSelection, computerSelection){

    switch (true) {
        case playerSelection == "rock" && computerSelection == "paper":
            console.log("you lose, paper beats rock");
            break;
    
        case playerSelection == "paper" && computerSelection == "rock":
            console.log("you win!!, paper beats rock");
            break;

        case playerSelection == "rock" && computerSelection == "scissors":
            console.log("you win!!, rock beats scissors");
            break;
        
        case playerSelection == "scissors" && computerSelection == "rock":
            console.log("you lose, rock beats scissors");
            break;

        case playerSelection == "paper" && computerSelection == "scissors":
            console.log("you lose, scissors beats paper");
            break;
            
        case playerSelection == "scissors" && computerSelection == "paper":
            console.log("you win!!, scissors beats paper");
            break;
        default:
            console.log("It's a draw!");    
    }
}

function game(){
    for (let index = 0; index < 5; index++) {
        
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        
    }
}
let playerScore = 0;
let computerScore = 0;
const playerSelection = "rock";

console.log(game());