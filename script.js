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