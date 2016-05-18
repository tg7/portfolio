//window.onload = function () {.

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];



//On-key up function

		var wins = 0;
		var losses = 0;
		var guessesLeft = 0;
	
	document.onkeyup = function(event) {
		if (guessesLeft >= 0) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	}
	
	function loadWords() {
		var word = '';
		var guesses = ['_', '_', '_', '_', '_', '_'];

		var word = ['b', 'r', 'a', 'v', 'e', 's'];
		for (var i = 0; i< word.length;i++) {
			//check word[i] == userGuess

			//then show the letter on the page
			
		}


	}
