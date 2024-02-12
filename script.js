// Create  rock paper scissors game
// The game will be played against a computer


// SET round to 1

// REPEAT playGame()
    // computerChoice SET randomly between rock, paper, scissors
    // GET playerChoice (Assuming that the input is always valid)
    // CALL playRound with playerChoice and computerChoice returning roundResult
    // INCREMENT round
// UNTIL round is 5

const CHOICES = ['rock', 'paper', 'scissors'];


// Helper function that gives the computer random selection
function randomChoice(){
    let index = Math.floor(Math.random() * 3); // Returns a value between 0 - 2
    return CHOICES[index];
}


// Function to determine if the player loses or wins the round
function playRound(playerSelection, computerSelection){

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


function playGame(){
    let round  = 1;

    while (true){
        let computerChoice = randomChoice();
        
        let playerChoice = prompt(`'Choose ROCK, PAPER, or SCISSORS`).toLowerCase();

        let roundResult = playRound(playerChoice, computerChoice);
        
        console.log(roundResult);
        // Exits after 5th round
        if (round === 5){
            break;
        }

        round += 1
    }
}

playGame();

