//function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

let userWon = 0;
let PCWon = 0;

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


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'Same choice. It\'s a tie';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        userWon += 1;
        return 'You won. Rock beats scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        PCWon += 1;
        return 'You lost. Rock beats scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        userWon += 1;
        return 'You won. Scissors beat paper';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        PCWon += 1;
        return 'You lost. Scissors beat paper';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        userWon += 1;
        return 'You won. Paper beats rock';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        PCWon += 1;
        return 'You lost. Paper beats rock';
    }

}

function playGame() {

    counter = 1;

    for (i = 1; i <= 5; i++) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

    }

    if (userWon > PCWon) {
        console.log('You won!!!');
    } else {
        console.log('You lost');
    } 
}