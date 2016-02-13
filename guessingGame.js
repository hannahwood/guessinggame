/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

var playersGuess,
    winningNumber = generateWinningNumber(),
    guesses = [];



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
	var hilo = '';
	var difference = Math.abs(winningNumber - playersGuess);
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
	if (playersGuess === winningNumber){
		$("div.message" ).html( "<p><b>You won!</b></p>");
		guesses = [];
	}
	else if (100 < playersGuess && playersGuess< 1 ) {
		$("div.message" ).html( "<p>That number is not between 1 and 100.</p>");
	}
	else if (guesses.indexOf(playersGuess) != -1){
      		$("div.message" ).html( "<p>You already guessed that number.</p>");
        }
	else {
		guesses.push(playersGuess);
		var guessesLeft = 5 - guesses.length;
		$("div.message" ).html( "<p>Try again. " + guessesLeft + " guesses left</p>");
		$("div.lowerHigher" ).html( "<p>" + lowerOrHigher() + "</p>");
	}

}


// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	var no1 = randomNumber = Math.floor(Math.random() * 100 + 1);
	var no2 = randomNumber = Math.floor(Math.random() * 100 + 1);
	var array = [0, 1, 2];
	var randomNo = Math.floor(Math.random() * 3);
	if (randomNo === 0) {
		array = [winningNumber, no1, no2];
	}
	else if (randomNo === 1) {
		array = [no1, winningNumber, no2];
	}
	else (array = [no1, no2, winningNumber]);
	$("div.message" ).html( "<p>The answer is either " + array[0] + ", " + array[1] + ", or " + array[2] + ".</p>");
}

// Allow the "Player" to Play Again

function playAgain(){
	winningNumber = generateWinningNumber(),
    	guesses = [];
    	$("div.message" ).html( "<p></p>");
    	$("div.lowerHigher" ).html( "<p></p>");
}


/* **** Event Listeners/Handlers ****  */
