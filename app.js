let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const pScore = document.querySelector(".playerScore");
const cScore = document.querySelector(".computerScore");




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

    //var result = "";
    if (playerScore <= 5 && computerScore <= 5) {
        if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            pCount.innerText = `${playerScore}`;
            // result = "won";
            // alert(result);
        } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            cCount.innerText = `${computerScore}`;
            //result = "lose";
            //alert(result);
        } else {
            return;
            //result = "draw";
            //alert(result);
        } //else {
        // alert("enter valid choice!");
        //}
        // return result;
    } else {
        alert("game over!");
    }
}

/*function game() {
    var playerScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
        if (playRound === "won") {
            playerScore += 1;
        } else if (playRound === "lose") {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore) {
        alert(`you won by ${playerScore} to ${computerScore}`)
    } else {
        alert(`you lost by ${playerScore} to ${computerScore}`)
    }
}*/