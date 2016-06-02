//$(document).ready(function(){

window.onload = function () { 


// Reset Function

function reset(){
	isRivalPicked = false;
};

function resetGame() {
	window.location.href="index.html";

}

function winGame() {
	window.location.href="win.html";

}

// Audio

var audio = new Audio('assets/tmntThemeSong.mp3');
	audio.play();

// Character Object Data

var characters = {
	Donatello: {
		name: 'Donatello',
		attack: 26,
		life: 150
	},
	Leonardo: {
		name: 'Leonardo',
		life: 130,
		attack: 18		
	},
	Raphael: {
		name: 'Raphael',
		life: 110,
		attack: 5
	}, 
	Michelangelo: {
		name: 'Michelangelo',
		life: 100,
		attack: 8
	}
};

// Characters Picked/Descriptions

var isCharacterPicked = false;
var isRivalPicked = false;
var characterChosen = "";
var character;
var charactersLife;
var rival;
var charactersDefeated = 0;

// Makes Attack Button Clickable & Append Text To Defender Div

	
function rmRival () {
	$('#' + rival.name).hide();

	};

// On click function for Button & Attacks

	$('.attack').on('click', function() {
	

	$('.attackMessage').html('You\'ve attacked for ' + character.attack + '<br> You\'ve been attacked for ' + rival.attack);

	// function replacetext()

	//  $("#name").replaceWith($('<textarea>').attr({ id: 'name', value: $('#name').text() }));

	character.life = character.life - rival.attack;

	rival.life = rival.life - character.attack;

	//Changes Life After Attacked
	$('#donLife').html(characters.Donatello.life);
	$('#leoLife').html(characters.Leonardo.life);
	$('#michLife').html(characters.Michelangelo.life);
	$('#raphLife').html(characters.Raphael.life);

	//Removes Rival	
	 if (rival.life <= 0) {	

		setTimeout(rmRival, 1500);
		$('#' + rival.name).html(rival.name + ' has been defeated');
		charactersDefeated ++;

		if (charactersDefeated === 3) {
			// Win Game
			winGame();
		}
		reset();

	} else if (character.life <=0) {
		alert('You Lose!');
		resetGame();

	};

	
	});


// Makes 4 Characters Clickable & Appends To Characters Div
$('.boxes').on('click', function(fight) {
	if (isCharacterPicked == false) {

			$(this).appendTo('#characters');

			var id = ($(this).attr('id'));

//character = the character that was clicked
		character = characters[id];
			console.log('character id is' , character);
			console.log('character is' , character.name);
		characterChosen = character.name;
		charactersLife = character.life;
			console.log('the characters life is ', charactersLife)
		isCharacterPicked = true;

	} else if (isRivalPicked == false && isCharacterPicked == true) {
			$(this).appendTo('#rival');
				isRivalPicked = true;

				//the rival = the rival that was clicked

			var id = ($(this).attr('id'));
			rival = characters[id];
	} 

	if (isRivalPicked == false && isCharacterPicked == characters.Donatello.name) {
			console.log('Testing123');
			alert('You Win!');
			winGame();
	};

});

};