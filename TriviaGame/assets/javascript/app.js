$( document ).ready(function() {


// Global Variables 

	var correct = 0;
	var incorrect = 0;
	var time = 10;

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

	$('#gameArea').append('<br>Question 1) Which of the following New York sports teams plays in the Barclays Center?<br>');
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
  reset();
  counter = setInterval(timer, 1000);
 
	$('#gameArea').html('<br>Question 2) Which baseball team did Babe Ruth begin his career with?<br>');
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
  reset();
  counter = setInterval(timer, 1000);
  
	$('#gameArea').html('<br>Question 3) Which city hosted the first ever Superbowl?<br>');
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

 		// Begins Ticking Sound  
 		// var audio = new Audio('assets/tick.wav');
   // 	audio.play();


 		// // Tells If Buttons is incorrect or true
 		// if ($(this).attr('data-answer') == false) {
 		// 	alert('You Chose Wrong!');
 		// 	console.log('This is Wrong!');
 			
 		// Resets Button (Makes it Clickable Again)

 		// };
 		// 		function reset() {

 		// 			$('#beginGame').prop('disabled', false);

 		// 		}

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
            alert('You Ran Out Of Time!');
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



       

      
    
  







