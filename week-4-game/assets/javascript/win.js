window.onload = function () {

// Plays Winning Music

$( "body" ).keypress(function() {
var audio = new Audio('assets/winMusic.wav');
   audio.play();

   setTimeout(threeSeconds, 2000); 

});

function threeSeconds() {
window.location.href="index.html";

}

$( "body" ).on('click', function() {
var audio = new Audio('assets/winMusic.wav');
   audio.play();

   setTimeout(threeSeconds, 2000); 

});

function threeSeconds() {
window.location.href="index.html";

}

};
