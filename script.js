let playerScore = 0;
let computerScore = 0;
let round = 0;

const roundResult = document.querySelector(".roundResult");
const score = document.querySelector(".score");

function computerPlay(){
    let computerAnswers = ["rock", "paper", "scissors"];
    let selectRandomNumber = Math.floor(Math.random()*3);
    return computerAnswers[selectRandomNumber];
}

function playRound(playerSelection, computerSelection){

    switch (true) {
        case playerSelection == "rock" && computerSelection == "paper":
            roundResult.textContent = "you lose, paper beats rock";
            computerScore++;
            round++;
            break;
    
        case playerSelection == "paper" && computerSelection == "rock":
            roundResult.textContent = "you win!!, paper beats rock";
            playerScore++;
            round++;
            break;

        case playerSelection == "rock" && computerSelection == "scissors":
            roundResult.textContent = "you win!!, rock beats scissors";
            playerScore++;
            round++;
            break;
        
        case playerSelection == "scissors" && computerSelection == "rock":
            roundResult.textContent = "you lose, rock beats scissors";
            computerScore++;
            round++;
            break;

        case playerSelection == "paper" && computerSelection == "scissors":
            roundResult.textContent = "you lose, scissors beats paper";
            computerScore++;
            round++;
            break;
            
        case playerSelection == "scissors" && computerSelection == "paper":
            roundResult.textContent = "you win!!, scissors beats paper";
            playerScore++;
            round++;
            break;
        default:
            round++;
            roundResult.textContent = "It's a draw!";
               
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const playerSelection = button.className;
        const computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);

        score.textContent = `Round ${round} the score is: ${playerScore} for the player and ${computerScore} for the computer`;
        if (round === 5) {
            if (playerScore > computerScore) {
                roundResult.textContent = "YOU WON THE GAME!!!!";
            }
            else if(playerScore === computerScore){
                roundResult.textContent = "IT'S A TIE!";
            }
            else{
                roundResult.textContent = "YOU LOST THE GAME!!!!";
            }
            score.textContent = `Final Round ${round} the score is: ${playerScore} for the player and ${computerScore} for the computer`;
            round = 0;
            playerScore = 0;
            computerScore = 0;
        }      
    });
});