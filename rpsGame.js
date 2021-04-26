/*
### Rock Paper Scissors Pseudocode

1. Prompt user to enter r, p, or s representing rock, paper, or scissors.

2. Computer chooses a random value in a list of r, p, or s.

3. We determine if the user wins or not.

   * If user picks rock and if computer picks scissors then user wins.

   * If user picks rock and if computer picks paper then user loses.

   * If user picks scissors and if computer picks rock then user loses.

   * If user picks scissors and if computer picks paper then user wins.

   * If user picks paper and if computer picks rock then user wins.

   * If user picks paper and if computer picks scissors then user loses.

   * If user picks the same as computer then they tie.

4. We then add to their score.

   * If user wins then we add one to their wins.
    
   * If user loses then we add one to their losses.
    
   * If user ties then we add one to their ties.

5. Prompt user to play again.

*/
//Prompts to start the game
var gameStart = confirm("Let's Play Rock-Paper-Scissors");
if (gameStart == true) {
	alert('Check Console for SCORBOARD');
	var rps = ['Rock', 'Paper', 'Scissors'];
	var playerChoice = undefined;
	var playerOneScore = 0;
	var roBotScore = 0;
	var tieScore = 0;
	var gameRound = 0;

	while (playerOneScore < 3 && roBotScore < 3) {
		//Prompt user to enter r, p, or s representing rock, paper, or scissors.
		var playerOne = prompt(
			'ROCK! \nPAPER! \nSCISSORS! \nSHOOT!',
			'ENTER   R=Rock          P=Paper          S=Scissors'
		);

		if (playerOne == null) {
			alert("Once you learn to quit, it becomes a habit.\nI Won't Let You");
		} else {
			//Computer chooses a random value in a list of r, p, or s.
			var roBot = rps[Math.floor(Math.random() * rps.length)];
			if (playerOne.toLowerCase() === rps[0].charAt(0).toLowerCase()) {
				playerChoice = rps[0];
				alert('Player =  ' + playerChoice);
				alert('Robot = ' + roBot);
				console.log('Player =  ' + playerChoice);
				console.log('Robot =  ' + roBot);
				//We determine if the user wins or not.
				//* If user picks rock and if computer picks scissors then user wins.
				if (playerChoice === rps[0] && roBot === rps[2]) {
					alert('You WIN this round!');
					//* If user wins then we add one to their wins.
					playerOneScore++;
				}
				//* If user picks rock and if computer picks paper then user loses.
				else if (playerChoice === rps[0] && roBot === rps[1]) {
					alert('You LOSE this round!');
					//* If user loses then we add one to their losses.
					roBotScore++;
				}
				//* If user picks the same as computer then they tie.
				else {
					alert('TIE');
					//* If user ties then we add one to their ties.
					tieScore++;
				}
			} else if (playerOne.toLowerCase() === rps[1].charAt(0).toLowerCase()) {
				playerChoice = rps[1];
				alert('Player =  ' + playerChoice);
				alert('Robot = ' + roBot);
				console.log('Player =  ' + playerChoice);
				console.log('Robot =  ' + roBot);
				//We determine if the user wins or not.
				//* If user picks paper and if computer picks rock then user wins.
				if (playerChoice === rps[1] && roBot === rps[0]) {
					alert('You WIN this round!');
					//* If user wins then we add one to their wins.
					playerOneScore++;
				}
				//* If user picks paper and if computer picks scissors then user loses.
				else if (playerChoice === rps[1] && roBot === rps[2]) {
					alert('You LOSE this round!');
					//* If user loses then we add one to their losses.
					roBotScore++;
				}
				//* If user picks the same as computer then they tie.
				else {
					alert('TIE');
					//* If user ties then we add one to their ties.
					tieScore++;
				}
			} else if (playerOne.toLowerCase() === rps[2].charAt(0).toLowerCase()) {
				playerChoice = rps[2];
				alert('Player =  ' + playerChoice);
				alert('Robot = ' + roBot);
				console.log('Player =  ' + playerChoice);
				console.log('Robot =  ' + roBot);
				//We determine if the user wins or not.
				//* If user picks scissors and if computer picks paper then user wins.
				if (playerChoice === rps[2] && roBot === rps[1]) {
					alert('You WIN this round!');
					//* If user wins then we add one to their wins.
					playerOneScore++;
				}
				//* If user picks scissors and if computer picks rock then user loses.
				else if (playerChoice === rps[2] && roBot === rps[0]) {
					alert('You LOSE this round!');
					//* If user loses then we add one to their losses.
					roBotScore++;
				}
				//* If user picks the same as computer then they tie.
				else {
					alert('TIE');
					//* If user ties then we add one to their ties.
					tieScore++;
				}
			} else {
				alert('Try Again \n \n R for Rock \n P for Paper \n S for Scissors');
			}

			console.log('ROUND ' + gameRound++);
			console.log('PlayerOne = ' + playerOneScore);
			console.log('Robot = ' + roBotScore);
			console.log('Draw = ' + tieScore);
		}
	}

	//Prompt user to play again.
	if (playerOneScore === 3) {
		var playAgain = confirm(
			'You Are The Grand Champion of ROCK PAPER SCISSORS!' +
				'\n ' +
				'\nGAME SCORE' +
				'\nPlayerOne = ' +
				playerOneScore +
				'\nRoBot = ' +
				roBotScore +
				'\nDraw = ' +
				tieScore +
				'\nTotal Rounds = ' +
				gameRound +
				'\n ' +
				'\nDo you want to play again!?'
		);
		if (playAgain == true) {
			location.reload();
		} else {
			alert('Take Care Now, Bye Bye Then');
			window.stop();
		}
	} else {
		var playAgain = confirm(
			'Better Luck Next Time LOSER' +
				'\n ' +
				'\nGAME SCORE' +
				'\nPlayerOne = ' +
				playerOneScore +
				'\nRoBot = ' +
				roBotScore +
				'\nDraw = ' +
				tieScore +
				'\nTotal Rounds = ' +
				gameRound +
				'\n ' +
				'\nDo you want to play again!?'
		);
		if (playAgain == true) {
			location.reload();
		} else {
			alert('Take Care Now, Bye Bye Then');
			window.stop();
		}
	}
} else {
	alert('Take Care Now, Bye Bye Then');
}

/*
 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
      var computerChoices = ["r", "p", "s"];
      // Creating variables to hold the number of wins, losses, and ties. They start at 0.
      var wins = 0;
      var losses = 0;
      var ties = 0;
      for (var i = 0; i < 10; i++) {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // Collect the user's response and convert to lower case.
        var userGuess = prompt("Enter r, p, or s to play!");
        userGuess = userGuess.toLowerCase();
        // Only run game logic if user chose a valid option
        if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
          alert("The computer chose " + computerGuess);
          // Win/lose conditions:
          if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") || 
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
            alert("You've won " + wins + " time(s)!");
          } else if (userGuess === computerGuess) {
            ties++;
            alert("You've tied " + ties + " time(s).");
          } else {
            losses++;
            alert("You've lost " + losses + " time(s).");
          }
        }
      }
      // When the game is over, alert the totals to the user. We can use the \n character to make a line break.
      alert("Total wins: " + wins + "\nTotal ties: " + ties + "\nTotal losses: " + losses);
*/
