"use strict"

const btns = document.querySelectorAll(`button`)
const output = document.getElementById(`output`)
let playerScore = 0;
let computerScore = 0;

btns.forEach((button) => {
    button.addEventListener(`click`, ()=>{

        output.textContent = ``
        
        let playerSelection = button.id;
        let computerSelection = computerPlay()
        let game = SPRround(playerSelection, computerSelection);

        let playerResult = document.createElement(`div`)
        let computerResult = document.createElement(`div`)
        let gameResult = document.createElement(`div`)

        playerResult.textContent = `${playerSelection}`
        computerResult.textContent = `${computerSelection}`
        gameResult.textContent = `${game}`

        output.appendChild(playerResult)
        output.appendChild(computerResult)
        output.appendChild(gameResult)

        if(game === `Player wins`){
            playerScore++;
        } else if(game === `Computer wins`){
            computerScore++;
        } else {
            console.log(`draw`)
        }

        console.log(playerScore)
        console.log(computerScore)

        if(playerScore === 5){
            playerScore = 0
            computerScore = 0
            return output.textContent = `Game Over Player wins`
        } else if (computerScore === 5) {
            playerScore = 0
            computerScore = 0
            return output.textContent = `Game Over Computer wins`
        }
    });
});

function computerPlay (){
    let actions = ["rock", "paper", "scissors"]

    let action = actions[Math.floor(Math.random()*actions.length)]

    return action
}

function SPRround (player, computerSelection) {

    if(player == "rock" && computerSelection == "rock"){
        return "Draw";
    } else if(player == "rock" && computerSelection == "paper") {
        return "Computer wins";
    } else if(player == "rock" && computerSelection == "scissors"){
        return "Player wins";
    } else if(player == "paper" && computerSelection == "paper"){
        return "Draw";
    } else if(player == "paper" && computerSelection == "scissors") {
        return "Computer wins";
    } else if(player == "paper" && computerSelection == "rock"){
        return "Player wins";
    } else if(player == "scissors" && computerSelection == "scissors"){
        return "Draw";
    } else if(player == "scissors" && computerSelection == "rock") {
        return "Computer wins";
    } else if(player == "scissors" && computerSelection == "paper"){
        return ("Player wins");
    }
}

