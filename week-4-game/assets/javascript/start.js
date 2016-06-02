window.onload = function () {

// Makes Click Sound When Any Key is Pressed

$( "body" ).keypress(function() {
var audio = new Audio('assets/startClick.wav');
   audio.play();

   setTimeout(threeSeconds, 2000); 

});

function threeSeconds() {
window.location.href="index.html";

}

$( "body" ).on('click', function() {
var audio = new Audio('assets/startClick.wav');
   audio.play();

   setTimeout(threeSeconds, 2000); 

});

function threeSeconds() {
window.location.href="index.html";

}

};
