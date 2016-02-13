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
	return guess;
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
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
