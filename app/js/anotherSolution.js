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
    function playToFive() {
    var playerMove;
    var computerMove;
    var playerWins=0;
    var computerWins=0;

    function getPlayerMove(move) {
        // Write an expression that operates on a variable called `move`
        // If a `move` has a value, your expression should evaluate to that value.
        // However, if `move` is not specified / is null, your expression should equal `getInput()`.
        move = getInput();
        playerMove = move;
        if (move === null){
            move = getInput();
        }
        console.log("Player Move="+ move);
        return playerMove;
    }

    function getComputerMove(move) {
        // Write an expression that operates on a variable called `move`
        // If a `move` has a value, your expression should evaluate to that value.
        // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        move = randomPlay();
        if(move === null) {
            move = randomPlay();
        }

        console.log("computer move="+move);
        return computerMove=move;
    }

    function getWinner(playerMove,computerMove) {
        var winner;
        // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
        // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
        // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

        /** Player Wins **/

        if (playerMove == 'rock' && computerMove == 'scissors') {
            alert('player wins');
            winner = "player";
        } else if ( playerMove == 'scissors' && computerMove == 'paper') {
            alert('player wins');
            winner = "player";
        } else if (playerMove == 'paper' && computerMove == 'rock') {
            alert('player wins');
            winner = "player";
        }

        /** Computer Wins **/
          else if (computerMove == 'rock' && playerMove == 'scissors') {
            alert('computer wins');
            winner = "computer";
        } else if (computerMove == 'scissors' && playerMove == 'paper') {
            alert('computer wins');
            winner = "computer";
        } else if (computerMove == 'paper' && playerMove == 'rock') {
            alert('computer wins');
            winner = "computer";
        }

        /** Draw **/

          else if (computerMove == 'rock' && playerMove == 'rock') {
            alert('tie');
            console.log("playerWins="+playerWins);
            console.log("computerWins="+computerWins);
        } else if (computerMove == 'scissors' && playerMove == 'scissors') {
            alert('tie');
            console.log("playerWins="+playerWins);
            console.log("computerWins="+computerWins);
        } else if (computerMove == 'paper' && playerMove == 'paper') {
            alert('tie');
            console.log("playerWins="+playerWins);
            console.log("computerWins="+computerWins);
        }
        console.log("winner = "+winner);
        return winner;
    }


    while(playerWins < 5 && computerWins < 5) {
        var winner = getWinner(getPlayerMove(),getComputerMove());
        if(winner == "player") {
        playerWins++;
        console.log("playerWins="+playerWins);
        console.log("computerWins="+computerWins);
        } else if (winner == "computer") {
        computerWins++;
        console.log("playerWins="+playerWins);
        console.log("computerWins="+computerWins);
        }
    }

    if(playerWins == 5){
        alert("player won it all");
    } else if (computerWins == 5) {
        alert("computer won it all");
    }
}


playToFive();



