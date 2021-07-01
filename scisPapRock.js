"use strict"

function computerPlay (){
    let actions = ["rock", "paper", "scissors"]

    let action = actions[Math.floor(Math.random()*actions.length)]

    return action
}

function SPRround (playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase()
    console.log(player)
    console.log(computerSelection)

    if(player == "rock" && computerSelection == "rock"){
        return "Draw";
    } else if(player == "rock" && computerSelection == "paper") {
        return "Computer wins";
    } else if(player == "rock" && computerSelection == "scissors"){
        return "player wins";
    } else if(player == "paper" && computerSelection == "paper"){
        return "Draw";
    } else if(player == "paper" && computerSelection == "scissors") {
        return "Computer wins";
    } else if(player == "paper" && computerSelection == "rock"){
        return "player wins";
    } else if(player == "scissors" && computerSelection == "scissors"){
        return "Draw";
    } else if(player == "scissors" && computerSelection == "rock") {
        return "Computer wins";
    } else if(player == "scissors" && computerSelection == "paper"){
        console.log("player wins");
    }
}

    let playerSelection = "paper"
    let computerSelection = computerPlay()

function game (){
    for (let i = 1; i <= 5; i++){
        let playerSelection = prompt("Scissors, Paper, Rock")
        let computerSelection = computerPlay()
        console.log(SPRround(playerSelection, computerSelection))
    }
}

console.log(`test test test`)

