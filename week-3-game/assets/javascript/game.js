window.onload = function () {

// Global Variables
	var wins = 0;
	var winsSpan = document.querySelector('#wins');
	winsSpan.innerHTML = wins;

	var losses = 0;
	var lossesSpan = document.querySelector('#losses');
	lossesSpan.innerHTML = losses;

	var guessesLeft = 10;
	var boxElement = document.getElementById('boxes');
	console.log(boxElement);
	var wordArray = ['mets', 'dodgers', 'phillies', 'marlins', 'nationals'];

	var answer = wordArray[Math.floor(Math.random() * wordArray.length)];

	console.log(answer)

	// Print letters to letters-used div

	makeBoxes();
	function makeBoxes() {
		boxes = [];

		 	for (var i = 0; i < answer.length; i++) {
		 		boxes.push('__');
		 		boxes.join('');
		 	}
	 	console.log(boxes);
	 	boxElement.innerHTML = boxes;
	 	return boxes;
	 }

	var remaining = document.getElementById('remaining');
	console.log(remaining);
	function resetGame() {
			boxes = makeBoxes();
			guessesLeft = 10;
			boxElement.innerHTML = boxes;	
	}

	// Onkey Up Function

	document.onkeyup = function(event) {
				guessesLeft--;
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

				console.log('userGuess', userGuess);

	// For Loop

	for (var i = 0; i<answer.length;i++) {
		if (userGuess == answer[i]) {
			boxes[i] = answer[i];
			// 
		}
	}
	boxElement.innerHTML = boxes;
	console.log(boxes)

	if(guessesLeft < 1){
		alert('you lose');
		losses++;
		lossesSpan.innerHTML = losses;
		resetGame();

	}

	if (boxes.join('') === answer){
		alert('you won');
		wins++;
		winsSpan.innerHTML = wins;
		resetGame();

	}

// Shows number of guesses 
	var chancesSpan = document.querySelector('#chances');
	chancesSpan.innerHTML = guessesLeft;


}

}
					