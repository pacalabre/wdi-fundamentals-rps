////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    move = getInput();
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     while (move !== 'rock' && move !== 'paper' && move !== 'scissors') {
            move = getInput();
            console.log("that happened")
        }
    console.log("Player's move is = "+move);
    var playerMove = move;
    getComputerMove(move, playerMove);

}



function getComputerMove(move,playerMove) {
    // Write an expression that operates on a variable called `move`
    move = randomPlay();
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    /*if(move == move) {
        console.log("Computer's move is "+ move)
        return move;
    }*/
    if (move == null) {
        alert("error, computer did not choose anything")
    }
    console.log("computers move ="+move);
    var computerMove = move;
    getWinner(playerMove, computerMove);
}

function getWinner(playerMove,computerMove) {
    var playerWins;
    var computerWins;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    /** Player Wins **/

    if (playerMove == 'rock' && computerMove == 'scissors') {
        alert('player wins');
        winner = 'player';
    } else if ( playerMove == 'scissors' && computerMove == 'paper') {
        alert('player wins');
        winner = 'player';
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        alert('player wins');
        winner = 'player';
    }

    /** Computer Wins **/
      else if (computerMove == 'rock' && playerMove == 'scissors') {
        alert('computer wins');
        winner = 'computer';
    } else if (computerMove == 'scissors' && playerMove == 'paper') {
        alert('computer wins');
        winner = 'computer';
    } else if (computerMove == 'paper' && playerMove == 'rock') {
        alert('computer wins');
        winner = 'computer';
    }

    /** Draw **/

      else if (computerMove == 'rock' && playerMove == 'rock') {
        alert('tie');
        getInput();
    } else if (computerMove == 'scissors' && playerMove == 'scissors') {
        alert('tie');
        getInput();
    } else if (computerMove == 'paper' && playerMove == 'paper') {
        alert('tie');
        getInput();
    }
    console.log("winner= "+winner);
    playToFive(playerWins,computerWins)
}

function playToFive(playerWins, computerWins) {
    //console.log("Let's play Rock, Paper, Scissors");
    var playerWins;
    var computerWins;

    getPlayerMove();


    //if(playerWins === 5) {
       // alert("Player Wins");
    //} else if ( computerWins === 5) {
        //alert("Computer Wins");
    //}
}

    playToFive();

