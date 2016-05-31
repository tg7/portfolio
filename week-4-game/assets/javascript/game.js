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
		life: 160
	},
	Leonardo: {
		name: 'Leonardo',
		life: 100,
		attack: 18		
	},
	Raphael: {
		name: 'Raphael',
		life: 120,
		attack: 5
	}, 
	Michelangelo: {
		name: 'Michelangelo',
		life: 75,
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
	console.log("Life is now: " + characters.Donatello.life);
	$('#donLife').html(characters.Donatello.life);
	$('#leoLife').html(characters.Leonardo.life);
	$('#michLife').html(characters.Michelangelo.life);
	$('#raphLife').html(characters.Raphael.life);
	// Adjusts Remaining Life

	
	 if (rival.life <= 0) {	

		setTimeout(rmRival, 2000);
		$('#' + rival.name).html(rival.name + ' has been defeated');
		reset();

	} else if (character.life <=0) {
		alert('You Lose!');
		resetGame();

	};


	// $('.health').html('Health: ' + character.life);
	// $('.health2').html('Health: ' + rival.life)
	
	});


// Makes 4 Characters Clickable & Appends To Characters Div

$('.boxes').on('click', function(fight) {
	if (isCharacterPicked == false) {
		console.log(characters.Donatello.life);
		console.log(characters.life);
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

	if (isRivalPicked == true && isCharacterPicked == false) {
		alert('You Win!');
		winGame();
	};

});

}