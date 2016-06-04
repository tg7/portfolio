$( document ).ready(function() {
console.log('I worked');


 $('button').on('click', function() {

 		// var correctAnswer = true;

 		alert($(this).attr('data-answer'));
 		console.log('data-answer');

 		if ($(this).attr('data-answer') == false) {
 			alert('You Chose Wrong!');
 			
 		};

 })
/*
// Starts The Game On Click
		$('#beginGame').on('click', function(e) {

			console.log('Welcome To Sports Trivia!');

			console.log('Are You Ready?');

	// Variables
	
		// var
		// var 

	

		// $('#beginGame').addClass('btn btn-danger active');
			console.log('this worked');

	// Starts Interval Timer

			// setInterval(timeClock, 30000) {

			// $('#timer').append(timeClock);


			// };


		});
*/

	});
