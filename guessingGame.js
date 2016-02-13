/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber();



/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	//generates number between 1 and 100
	var randomNumber = Math.floor(Math.random() * 100 + 1);
	return randomNumber;
}

// Fetch the Players Guess

function playersGuessSubmission(){
	var guess = +document.getElementById("submitValue").value;
	document.getElementById("submitValue").value = '';
	playersGuess = guess;
	checkGuess();
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	var guesses = [];
	if (playersGuess === winningNumber){
		$("div.message" ).html( "<p><b>You won!</b></p>");
	}
	else if (100 < playersGuess && playersGuess< 1 ) {
		$("div.message" ).html( "<p>That number is not between 1 and 100.</p>");
	}
	else if (guesses.indexOf(playersGuess) != -1){
      		$("div.message" ).html( "<p>You already guessed that number.</p>");
        }
	else {
		guesses.push(playersGuess);
		guessesLeft = guesses.length;
		$("div.message" ).html( "<p>Try again. </p>");
		$("div.message" ).append( document.createTextNode(guessesLeft.toString() + " guesses left"));
	}

}


// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */
