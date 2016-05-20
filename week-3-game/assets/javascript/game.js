
	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;

	var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


	var answer = ['b', 'r', 'a', 'v', 'e', 's'];
	var boxes =  ['_', '_', '_', '_', '_', '_'];

	var boxElement = document.getElementById('boxes');
	console.log('boxElement', boxElement);

	var remaining = document.getElementById('remaining');
	console.log('remaining', remaining);


	document.onkeyup = function(event) {
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

				console.log('userGuess', userGuess);

				var instr = document.getElementById('instructions');
				instr.innerHTML = "Game started, press a letter!";

		// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


		//function loadWords() {

	// For Loop

	for (var i = 0; i<answer.length;i++) {
		if (userGuess == answer[i]) {
			boxes[i] = answer[i];
		}
	}

	if (answer.indexOf(userGuess) >= 0) {
		//true
	} else {
		guessesLeft--;
		//if guessesLeft is 0 
		//losses-- ? 
		//reset
	}

	//how to win?
	if (answer.indexOf('_') == -1) {
		//then u win
	}

	boxElement.innerHTML = boxes;
	remaining.innerHTML = guessesLeft;

}

// function reset 	
		function reset() {
		guessesLeft = 10;
		answer = 0;// fix answer here
	}


		// Pick a word from the word list and randomize using Math.random //



	


		// if (guesses === 'b' || 'r' || 'a' || 'v' || 'e' || 's') {
		// 		alert('This is working');

		// 	};
		
	
				
