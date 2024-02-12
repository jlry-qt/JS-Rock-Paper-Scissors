// Create  rock paper scissors game
// The game will be played against a computer


// SET round to 0
let round = 0;

// REPEAT playGame()
    // computerChoice SET randomly between rock, paper, scissors
    // GET playerChoice (Assuming that the input is always valid)
    // CALL playRound with playerChoice and computerChoice returning roundResult
    // INCREMENT round
// UNTIL round is 5

const CHOICES = ['rock', 'paper', 'scissors'];


function getChoice(){
    let index = Math.floor(Math.random() * 3); // Returns a value between 0 - 2
    return CHOICES[index];
}

function playGame(){
    while (true){
        let computerChoice = getChoice();
        console.log(computerChoice);
        break
    }
}

playGame();

