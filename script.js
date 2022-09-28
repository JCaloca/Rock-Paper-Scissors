// var rock, paper, scissors
var rock = "rock";
var paper = "paper";
var scissors = "scissors";


// function compare
const winner = (player,computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();


if (player === computer) {
    result.textContent = 'tie'
}
    else if (player == 'rock') {
        if (computer == 'paper') {
            result.textcontent = 'computer won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
    }
function isEqual(, ){
    if (val1 === val2) {
        console.log("even")
    } else if (val1 == val2) {
        console.log('They are equal in value');
    } else {
        console.log('They are not equal');
    }




}


// promp()

