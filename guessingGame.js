
/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	//generates number between 1 and 100
	var winningNumber = Math.floor(Math.random() * 100 + 1);
	return winningNumber;
}

// Fetch the Players Guess


function playersGuessSubmission(){
	var playersGuess = +document.getElementById("sumbitValue").value;
	document.getElementById("sumbitValue").value = '';
	return playersGuess;
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	var difference = Math.abs(winningNumber - playersGuess);
	var hilo = '';
	if (winningNumber < playersGuess) {
		hilo = 'higher';
	}
	else (hilo = 'lower');
	if (difference >= 20) {
		return ("Your Guess is " + hilo + " and 20 or more digits away from the Winning Number!");
	}
	else if (10 <= difference < 20){
		return ("Your Guess is " + hilo + " and less than 20 digits away from the Winning Number!");
	}
	else if (5 < difference < 10){
		return ("Your Guess is " + hilo + " and less than 10 digits away from the Winning Number!");
	}
	else {
		return ("Your Guess is " + hilo + " and within 5 digits of the Winning Number!");
	}
	
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	var guesses = [];
	if (playersGuess === winningNumber){
		$("div.message" ).html( "<p><b>You won!</b></p>");
	}
	else if (100 < playersGuess < 1 ) {
		$("div.message" ).html( "<p>That number is not between 1 and 100.</p>");
	}
	else{
        for (i = 0; i < guesses.length; i++) {
        	if (playersGuess === guesses[i]){
        		$("div.message" ).html( "<p>You already guessed that number.</p>");
        	}
        	else {
        		guesses.push(playersGuess);
        		guessesLeft = guesses.length;
        		$("div.message" ).html( "<p>Try again. </p>");
        		$("div.message" ).append( document.createTextNode(guessesLeft.toString() + " guesses left"));
        	}
        }
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
