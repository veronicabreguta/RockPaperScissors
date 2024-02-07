//function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = "Scissors";

    let randomNumber = Math.floor(Math.random()* 3) + 1;

    //0 is for ROCK
    //1 Is for paper
    //2 (else) is for scissors

    if (randomNumber === 1) {
        return rock;
    } else if (randomNumber === 2) {
        return paper;
    } else {
        return scissors;
    }

}

function getPlayerChoice() {

    let userInput = prompt('Choose: "Rock" "Paper" "Scissors"');

    if (userInput.toLowerCase() === 'rock') {
        return 'Rock';
    } else if (userInput.toLowerCase() === 'paper') {
        return 'Paper';
    } else if (userInput.toLowerCase() === 'scissors') {
        return 'Scissors';
    }

}


let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'Same choice. Let\'s try again';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You won. Rock beats scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return 'You lost. Rock beats scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You won. Scissors beat paper';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lost. Scissors beat paper';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        return 'You won. Paper beats rock';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lost. Paper beats rock';
    }

}

