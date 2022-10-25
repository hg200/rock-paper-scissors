let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const pScore = document.querySelector(".playerScore");
const cScore = document.querySelector(".computerScore");
const declaration = document.querySelector("declaration");
const body = document.querySelector("body");


function getComputerSelection() {
    var choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

var btns = document.querySelectorAll("button");
btns.forEach(button => {
    button.addEventListener("click", () => {
        playerSelection = button.getAttribute("id");
        playRound(playerSelection, computerSelection);
    });
})

// appending h2 to player score
const pCount = document.createElement("h2");
pCount.innerText = `${playerScore}`;
pScore.appendChild(pCount);

//appending h2 to computer score
const cCount = document.createElement("h2");
cCount.innerText = `${computerScore}`;
cScore.appendChild(cCount);

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerSelection().toLowerCase();


    if (playerScore <= 4 && computerScore <= 4) {
        if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            pCount.innerText = `${playerScore}`;

        } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            cCount.innerText = `${computerScore}`;

        } else {
            return;
        }

    } else {
        const reload = document.createElement("button");
        reload.innerText = "RELOAD";
        body.appendChild(reload);
        reload.addEventListener("click", () => {
            window.location.reload();
        })
    }
}