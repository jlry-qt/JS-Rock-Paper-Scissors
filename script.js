const CHOICES = ['rock', 'paper', 'scissors'];



function getComputerChoice(){
    let index = Math.floor(Math.random() * 3); // Returns a random value between 0 - 2
    return CHOICES[index];
}


// Function to determine if the player loses or wins the round
function playRound(playerSelection){
    let computerSelection = getComputerChoice();

    switch(playerSelection){
        case 'rock':
            if (playerSelection === computerSelection){
                return `It's a DRAW! You both chose ROCK`;
            }
            else if (computerSelection === 'scissors'){
                return `You WIN! ${playerSelection} beats ${computerSelection}`;
            }
            else {
                return `You LOSE! ${playerSelection} loses to ${computerSelection}`;
            }
        
        case 'paper':
            if (playerSelection === computerSelection){
                return `It's a DRAW! You both chose PAPER`;
            }
            else if (computerSelection === 'rock'){
                return `You WIN! ${playerSelection} beats ${computerSelection}`;
            }
            else {
                return `You LOSE! ${playerSelection} loses to ${computerSelection}`;
            }

        case 'scissors':
            if (playerSelection === computerSelection){
                return `It's a DRAW! You both chose SCISSORS`;
            }
            else if (computerSelection === 'paper'){
                return `You WIN! ${playerSelection} beats ${computerSelection}`;
            }
            else {
                return `You LOSE! ${playerSelection} loses to ${computerSelection}`;
            }

        default:
            return;
    }
}


function playGame(event){
    let playerChoice = event.target.id;

    let roundResult = playRound(playerChoice);

    resultElement.innerHTML = roundResult;
}


const resultElement = document.querySelector('#round-result');
const choicesButtons = document.querySelectorAll('.choices');


choicesButtons.forEach(buttons => {
    buttons.addEventListener('click', playGame);
});
