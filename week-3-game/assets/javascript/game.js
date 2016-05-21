
	var wins = 0;
	var winsSpan = document.querySelector('#wins');
	winsSpan.innerHTML = wins;
	var losses = 0;
	var guessesLeft = 10;
	var boxElement = document.getElementById('boxes');
	console.log('boxElement', boxElement);
	var wordArray = ['mets', 'dddgers', 'phillies', 'marlins', 'nationals'];
	var answer = wordArray[Math.floor(Math.random() * wordArray.length)];
	console.log(answer)

	var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


	
	makeBoxes();
	var boxes = [];
	makeBoxes()
	function makeBoxes() {
		boxes = [];

	 	for (var i = 0; i < answer.length; i++) {
	 		boxes.push('_');
	 	}
	 	console.log(boxes)
	 	boxElement.innerHTML = boxes;
	 	return boxes;
	 }


	var remaining = document.getElementById('remaining');
	console.log('remaining', remaining);
	function resetGame() {
			boxes = makeBoxes();
			guessesLeft = 10;
			boxElement.innerHTML = boxes;
			

	}


	document.onkeyup = function(event) {
				guessesLeft--;
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

				console.log('userGuess', userGuess);

				var instr = document.getElementById('instructions');
				instr.innerHTML = "Game started, press a letter!";

	


		//function loadWords() {

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
		resetGame();

	}

	if (boxes.join('') === answer){
		alert('you won');
		wins++;
		winsSpan.innerHTML = wins;
		resetGame();

	}



	// if (answer.indexOf(userGuess) >= 0) {
	// 	//true
	// } else {
	// 	guessesLeft--;
	// 	//if guessesLeft is 0 
	// 	//losses-- ? 
	// 	//reset
	// }

	//how to win?
	if (answer.indexOf('_') == -1) {
		//then u win
	}

	// boxElement.innerHTML = boxes;
	remaining.innerHTML = guessesLeft;

}



		// Pick a word from the word list and randomize using Math.random //



	


		// if (guesses === 'b' || 'r' || 'a' || 'v' || 'e' || 's') {
		// 		alert('This is working');

		// 	};
		
	
				
