//$(document).ready(function(){

window.onload = function () { 


// Reset Function

function reset(){
	isRivalPicked = false;
};

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
		attack: 22		
	},
	Raphael: {
		name: 'Raphael',
		life: 120,
		attack: 10
	}, 
	Michelangelo: {
		name: 'Michelangelo',
		life: 75,
		attack: 12
	}
};

// Characters Picked/Descriptions

var isCharacterPicked = false;
var isRivalPicked = false;

var character;
var rival;

// Makes Attack Button Clickable & Append Text To Defender Div

	
function rmRival () {
	$('#' + rival.name).hide();

	};


// On click function for Button & Attacks

	$('.attack').on('click', function() {


	$('.attackMessage').html('You\'ve attacked for ' + character.attack + '<br> You\'ve been attacked for ' + rival.attack);

	character.life = character.life - rival.attack;
	rival.life = rival.life - character.attack;

	if (rival.life <= 0) {		
		setTimeout(rmRival, 2000);
		$('#' + rival.name).html(rival.name + ' has been defeated');
		reset();
	}

	// $('.health').html('Health: ' + character.life);
	// $('.health2').html('Health: ' + rival.life)
	
	
	});


// Makes 4 Characters Clickable & Appends To Characters Div

$('.boxes').on('click', function(fight) {
	if (isCharacterPicked == false) {
		$(this).appendTo('#characters');
		var id = ($(this).attr('id'));

		//character = the character that was clicked
		character = characters[id];
		console.log('character is' , character);

		isCharacterPicked = true;
	} else if (isRivalPicked == false && isCharacterPicked == true) {
		$(this).appendTo('#rival');
			isRivalPicked = true;
			//the rival = the rival that was clicked
			var id = ($(this).attr('id'));
			rival = characters[id];
	} 
});

}