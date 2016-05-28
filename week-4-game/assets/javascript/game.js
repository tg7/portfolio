//$(document).ready(function(){

window.onload = function () { 

alert('Choose Your 1st Character!')
	
	function loadMessage () {


	}


// function reset(){
// 	$('#attackMessage').;
// };

// Audio

var audio = new Audio('assets/tmntThemeSong.mp3');
	audio.play();

// Character Life

var donLife = 160;
var leoLife = 100;
var michLife = 75;
var raphLife = 120;

// Character Attack

var donattack = 26;
var leoattack = 22;
var michattack = 12;
var raphattack = 10;

// Reset Function 

// function resetHealth(){
// 	$('#battleNotes').replaceWith('You\'ve attacked for' + raphattack);
	
// };

// Makes Attack Button Clickable & Append Text To Defender Div

$('.attack').on('click', function() {
	// alert('I\'ve been clicked!');
	$('.attackMessage').html('You\'ve attacked for ' + donattack + '<br> You\'ve been attacked for ' + leoattack);
	donLife = donLife - leoattack;
	
	// $('#rival').append(leoattack);
	// raphLife = raphLife - donattack;

	// if (charatcterattack1)
	// $('.attackMessage').append('You\'ve attacked for ' + raphattack).fadeOut(5000);;
	// donLife = donLife - raphattack;

	// Put's Don's Life In Rival Section

	$('.health').html('Health: ' + donLife);


	$('.health2').html('Health: ' + leoLife)
	leoLife = leoLife - donattack;
	
	//Fade Out 

	if (leoLife <= 0) {		
		setTimeout(rmLeo, 2000);
		$('#leo').html('Leonardo has been defeated');

	}

	else {

	}

	function rmLeo () {
		$('#leo').hide();


	};

	// else {
	// 	alert ('You Win!')

	// }

	// }

});


// Makes 4 Characters Clickable & Appends To Characters Div

$('#don').on('click', function(fight) {
	alert('I clicked Don');
	
	// Appends To Characters Div

	// Subtract Health 

	$('#don').appendTo('#characters');

});

$('#leo').on('click', function(fight) {
	alert('I clicked Leo');

	$('#leo').appendTo('#rival');

});

$('#mich').on('click', function(fight) {
	alert('I clicked Mich');

	$('#mich').appendTo('#characters');

});

$('#raph').on('click', function(fight) {
	alert('I click Raph');

	$('#raph').appendTo('#characters');

});


// If & Else Statements

//attacker = null;
//defender = null;

// if both == null than good

// if both !== null only 2 fighters at once

// if there is an attacker and defender return













}