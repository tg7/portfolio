$( document ).ready(function() {


// Global Variables 

	var correct = null;
	var incorrect = null;
	var questions = 5;
	var time = 10;
	var results = correct/questions;

// Clears Counter

	function stopTick() {

 	 	clearInterval(counter);
  	$('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
         
};

// Starts Game On Button Click

 $('#beginGame').on('click', function() {

 	 	// Disables the start button and appends clock to timer Div

 	$('#beginGame').prop('disabled', true);
 	$('#timer').append(time);
 	q1();

 		// Questions 

function q1() {

	// Starts Ticking Sound

	// var audio = new Audio('assets/tickTock.wav');
 //   	audio.play();

	$('#gameArea').append('<br><strong>Question 1:</strong> Which of the following New York sports teams plays in the Barclays Center?<br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">New York Knicks</button><br>'); 
	$('#gameArea').append('<br><button data-answer="true" class="btn btn-primary active" id="rightAnswer">Brooklyn Nets</button><br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">New York Giants</button><br>')
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">New York Rangers</button><br>')

	// If User Chooses Correct Answer

	$('#rightAnswer').on('click', function() {
		

		var audio = new Audio('assets/correct.wav');
   	audio.play();

		correct++;
		$('#correct').html(correct);	
		$('#gameArea').html('You are correct!<br><br><img src="https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif" height="300" width="500"<br>');

		
		stopTick();
		setTimeout(q2, 3000);

	});
   
	// If User Chooses Incorrect Answer

	$('.incorrect').on('click', function() {
		
	
		var audio = new Audio('assets/buzzer.wav');
   	audio.play();
 
		incorrect++;
		$('#incorrect').html(incorrect);		
		$('#gameArea').html('You are incorrect!<br><strong>Brooklyn Nets</strong> was the correct answer!<br><br><img src="https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif" height="300" width="500"<br>');

		
		stopTick();
		setTimeout(q2, 3000);


	});

  }

   function q2() {
   
  time = 10;
  $('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
  counter = setInterval(timer, 1000);


  // Starts Ticking Sound

  // var audio = new Audio('assets/tickTock.wav');
  //  	audio.play();
 
	$('#gameArea').html('<br><strong>Question 2:</strong> Which baseball team did Babe Ruth begin his career with?<br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">New York Yankees</button><br>'); 
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Chicago Cubs</button><br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Brooklyn Dodgers</button><br>');
	$('#gameArea').append('<br><button data-answer="true" class="btn btn-primary active" id="rightAnswer">Boston Red Sox</button><br>');

	// Displays Correct Answer

	$('#rightAnswer').on('click', function() {
		stopTick();

		var audio = new Audio('assets/correct.wav');
   	audio.play();

		correct++;
	$('#correct').html(correct);	
	$('#gameArea').html('You are correct!<br><br><img src="https://media.giphy.com/media/RiYPRRTG81OA8/giphy.gif" height="300" width="500"<br>');
	setTimeout(q3, 3000);

	});
   
	// If User Chooses Incorrect Answer

	$('.incorrect').on('click', function() {
		stopTick();

		var audio = new Audio('assets/buzzer.wav');
   	audio.play();

		incorrect++;
	$('#incorrect').html(incorrect);	
	$('#gameArea').html('You are incorrect!<br><strong>Boston Red Sox</strong> was the correct answer!<br><br><img src="https://media.giphy.com/media/RiYPRRTG81OA8/giphy.gif" height="300" width="500"<br>');
	setTimeout(q3, 3000);
	});

	function timeup () {


		incorrect++;
	$('#incorrect').html(incorrect);	
	alert('You Ran Out Of Time!');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/RiYPRRTG81OA8/giphy.gif" height="300" width="500"<br>');
	setTimeout(q3, 3000);
	}

  }

  function q3() {
  time = 10;
  $('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
  counter = setInterval(timer, 1000);
  
	$('#gameArea').html('<br><strong>Question 3:</strong> Which city hosted the first ever Superbowl?<br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Miami, FL</button><br>'); 
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">San Jose, CA</button><br>');
	$('#gameArea').append('<br><button data-answer="true" class="btn btn-primary active" id="rightAnswer">Los Angeles, CA</button><br>')
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Tampa, FL</button><br>')

	// Displays Correct Answer

	$('#rightAnswer').on('click', function() {
		stopTick();

		var audio = new Audio('assets/correct.wav');
   	audio.play();

		correct++;
	$('#correct').html(correct);	
	$('#gameArea').html('You are correct!<br><br><img src="https://media.giphy.com/media/3orieZiLPuWTR1ZndS/giphy.gif" height="300" width="500"<br>');
	setTimeout(q4, 3000);

	});
   
	// If User Chooses Incorrect Answer

	$('.incorrect').on('click', function() {
		stopTick();

		var audio = new Audio('assets/buzzer.wav');
   	audio.play();

		incorrect++;
	$('#incorrect').html(incorrect);	
	$('#gameArea').html('You are incorrect!<br><strong>Los Angeles, CA</strong> was the correct answer!<br><br><img src="https://media.giphy.com/media/3orieZiLPuWTR1ZndS/giphy.gif" height="300" width="500"<br>');
	setTimeout(q4, 3000);
	});

	function timeup () {


		incorrect++;
	$('#incorrect').html(incorrect);	
	alert('You Ran Out Of Time!');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/3orieZiLPuWTR1ZndS/giphy.gif" height="300" width="500"<br>');
	setTimeout(q4, 3000);
	}

  }
 			
 	function q4() {
  time = 10;
  $('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
  counter = setInterval(timer, 1000);
  
	$('#gameArea').html('<br><strong>Question 4:</strong> Who holds the NBA Record for most points scored in a quarter?<br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Wilt Chamberlin</button><br>'); 
	$('#gameArea').append('<br><button data-answer="true" class="btn btn-primary active" id="rightAnswer">Klay Thompson</button><br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">George Gervin</button><br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Kobe Bryant</button><br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">None Of The Above</button><br>')

	// Displays Correct Answer

	$('#rightAnswer').on('click', function() {
		stopTick();

		var audio = new Audio('assets/correct.wav');
   	audio.play();

		correct++;
	$('#correct').html(correct);	
	$('#gameArea').html('You are correct!<br><br><img src="https://media.giphy.com/media/1idQ5FW9lpJZu/giphy.gif" height="300" width="500"<br>');
	setTimeout(q5, 3000);

	});
   
	// If User Chooses Incorrect Answer

	$('.incorrect').on('click', function() {
		stopTick();

		var audio = new Audio('assets/buzzer.wav');
   	audio.play();

		incorrect++;
	$('#incorrect').html(incorrect);	
	$('#gameArea').html('You are incorrect!<br><strong>Klay Thompson - 37 Points</strong> was the correct answer!<br><br><img src="https://media.giphy.com/media/1idQ5FW9lpJZu/giphy.gif" height="300" width="500"<br>');
	setTimeout(q5, 3000);
	});

	function timeup () {


		incorrect++;
	$('#incorrect').html(incorrect);	
	alert('You Ran Out Of Time!');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/1idQ5FW9lpJZu/giphy.gif" height="300" width="500"<br>');
	setTimeout(q5, 3000);
	}

  }

  function q5() {
  time = 10;
  $('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
  counter = setInterval(timer, 1000);
  
	$('#gameArea').html('<br><strong>Question 5:</strong> Who won the NBA Championship in 2007?<br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Cleveland Cavaliers</button><br>'); 
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Detroit Pistons</button><br>');
	$('#gameArea').append('<br><button data-answer="true" class="btn btn-primary active" id="rightAnswer">San Antonio Spurs</button><br>')
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Miami Heat</button><br>')

	// Displays Correct Answer

	$('#rightAnswer').on('click', function() {
		stopTick();

		var audio = new Audio('assets/correct.wav');
   	audio.play();

		correct++;
	$('#correct').html(correct);	
	$('#gameArea').html('You are correct!<br><br><img src="https://media.giphy.com/media/gHIKoRtXJIs36/giphy.gif" height="300" width="500"<br>');
	setTimeout(total, 3000);

	});
   
	// If User Chooses Incorrect Answer

	$('.incorrect').on('click', function() {
		stopTick();

		var audio = new Audio('assets/buzzer.wav');
   	audio.play();

		incorrect++;
	$('#incorrect').html(incorrect);	
	$('#gameArea').html('You are incorrect!<br><strong>San Antonio Spurs</strong> was the correct answer!<br><br><img src="https://media.giphy.com/media/gHIKoRtXJIs36/giphy.gif" height="300" width="500"<br>');
	setTimeout(total, 3000);
	});

	function timeup () {


		incorrect++;
	$('#incorrect').html(incorrect);	
	alert('You Ran Out Of Time!');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/gHIKoRtXJIs36/giphy.gif" height="300" width="500"<br>');
	setTimeout(total, 3000);
	}

  }
 	// End Of Game

 	function total() {
  
  var results = correct/questions * 100;

	$('#gameArea').html('<br>' + 'You Scored ' + results + '%' + '<br>');
	$('#gameArea').append('<br><button class="btn btn-default active" id="resetGame">Play Again?</button><br>'); 

	// Resets Game If Clicked

		$('#resetGame').on('click', function() {

			window.location.href="index.html";
			console.log('Did I work?');

		});
	
	};

    // Timer Function
    
        var time = 10;
     
        function run(){
            counter = setInterval(timer, 1000);

        }

     	// If user runs out of time 

  			function timer(){
            time--;
            $('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
            if (time <= 0){
            incorrect++;
            $('#incorrect').html(incorrect);	
            // alert('You Ran Out Of Time!');
						console.log('You Ran Out Of Time!');
						setTimeout(q2, 3000);
						stopTick();

                // Plays Buzzer Sound

                var audio = new Audio('assets/buzzer.wav');
   							audio.play();
                
            };

          };

          run();

				  function reset(){
					clearTimeout(counter);
					time = 10;
				};
		});

});
    





       

      
    
  







