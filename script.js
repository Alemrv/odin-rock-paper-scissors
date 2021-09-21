let playerScore = 0;
let computerScore = 0;

const roundResult = document.querySelector(".roundResult");
const pcScoreDiv = document.querySelector(".pc-score-div");
const playerScoreDiv = document.querySelector(".player-score-div");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const btnHide = document.querySelector(".btn-hide");

function computerPlay(){
    let computerAnswers = ["rock", "paper", "scissors"];
    let selectRandomNumber = Math.floor(Math.random()*3);
    return computerAnswers[selectRandomNumber];
}

function playRound(playerSelection, computerSelection){

    switch (true) {
        case playerSelection == "rock" && computerSelection == "paper":
            roundResult.textContent = "you lose! paper beats rock";
            computerScore++;
            break;
    
        case playerSelection == "paper" && computerSelection == "rock":
            roundResult.textContent = "you win! paper beats rock";
            playerScore++;
            break;

        case playerSelection == "rock" && computerSelection == "scissors":
            roundResult.textContent = "you win! rock beats scissors";
            playerScore++;
            break;
        
        case playerSelection == "scissors" && computerSelection == "rock":
            roundResult.textContent = "you lose! rock beats scissors";
            computerScore++;
            break;

        case playerSelection == "paper" && computerSelection == "scissors":
            roundResult.textContent = "you lose! scissors beats paper";
            computerScore++;
            break;
            
        case playerSelection == "scissors" && computerSelection == "paper":
            roundResult.textContent = "you win! scissors beats paper";
            playerScore++;
            break;
        default:
            roundResult.textContent = "It's a draw!";
               
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const playerSelection = button.className;
        const computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);

        pcScoreDiv.textContent = `${playerScore}`;
        playerScoreDiv.textContent = `${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore) {
                roundResult.textContent = "YOU WON THE GAME!!!!";

            }
            else{
                roundResult.textContent = "YOU LOST THE GAME!!!!";
                
            }
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            btnHide.style.display = "block";
            playerScore = 0;
            computerScore = 0;
            return;
        }      
    });
});

btnHide.addEventListener("click", ()=>{
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    btnHide.style.display = "none";
    pcScoreDiv.textContent = `${playerScore}`;
    playerScoreDiv.textContent = `${computerScore}`;
    roundResult.textContent = "";
})