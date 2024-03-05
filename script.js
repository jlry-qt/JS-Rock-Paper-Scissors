const CHOICES = ['ROCK', 'PAPER', 'SCISSOR'];



function getComputerChoice(){
    let index = Math.floor(Math.random() * 3); // Returns a random value between 0 - 2
    return CHOICES[index];
}

// Function to determine if the player loses or wins the round
function playRound(playerSelection, computerSelection){

    // 1 = player WINS , 0 = player LOSES, 3 = DRAW
    if (playerSelection === computerSelection){
        return 3;
    }

    switch (playerSelection){
        case 'ROCK':
            if (computerSelection === 'SCISSOR') return 1;
            return 0;

        case 'PAPER':
            if (computerSelection === 'ROCK') return 1;
            return 0;
        
        case 'SCISSOR':
            if (computerSelection === 'PAPER') return 1;
            return 0;
    }
}


function playGame(event){
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();

    let roundResult = playRound(playerChoice, computerChoice);

    // Decide Win Game


    //Decide WIN or LOSE round
    if (roundResult === 1){
        resultElement.innerHTML = `You WIN! ${playerChoice} beats ${computerChoice}`;
        displayPlayerScore.innerHTML = `Player Score : ${++playerScore}`;

    } else if (roundResult === 0){
        resultElement.innerHTML = `You LOSE! ${playerChoice} loses to ${computerChoice}`;
        displayComputerScore.innerHTML = `Computer Score : ${++computerScore}`;

    } else {
        resultElement.innerHTML = `It's a DRAW! You both chose ${playerChoice}`;
    }

    if (playerScore >= 5 || computerScore >= 5){

        if (playerScore > computerScore){
            resultElement.innerHTML = 'PLAYER WINS!';
            document.querySelector('.choices-container').innerHTML = '';
        } else {
            resultElement.innerHTML = 'COMPUTER WINS!';
            document.querySelector('.choices-container').innerHTML = '';
        }
    }
}


const resultElement = document.querySelector('#round-result');
const choicesButtons = document.querySelectorAll('.choices');
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');
let playerScore = 0;
let computerScore = 0;


choicesButtons.forEach(buttons => {
    buttons.addEventListener('click', playGame);
});
