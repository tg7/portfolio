$( document ).ready(function() {
// alert('Click Button To Begin Game!');

	var correct = 0;
	var incorrect = 0;
	var time = 20;

function stopTick(){
  clearInterval(counter);
  $('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
  	
         
};

function hideQuestion () {
	$('.gameArea').fadeOut(5000);

};

function showQuestion () {
	$('#gameArea').fadeIn();

}

// }

 $('#beginGame').on('click', function() {

 	 	// Disables the start button and appends clock to timer Div

 		$('#beginGame').prop('disabled', true);
 		$('#timer').append(time);
 		q1();

 		// Questions 

function q1() {
	$('#gameArea').append('<br>Question 1) Which of the following New York sports teams plays in the Barclays Center?<br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">New York Knicks</button><br>'); 
	$('#gameArea').append('<br><button data-answer="true" class="btn btn-primary  active" id="answer">Brooklyn Nets</button><br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">New York Giants</button><br>')
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">New York Rangers</button><br>')

	// Displays Correct Answer

	$('#answer').on('click', function() {

		hideQuestion();
		

		var audio = new Audio('assets/correct.wav');
   	audio.play();

		correct++;
	$('#correct').html(correct);	
	$('#gameArea').html('You are correct!<br>');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif" height="300" width="500"<br>');

	stopTick();

	

		
	setTimeout(q2, 5000);



	});
   
	// If User Chooses Incorrect Answer

	$('.incorrect').on('click', function() {
	


		var audio = new Audio('assets/buzzer.wav');
   	audio.play();

		incorrect++;
	$('#incorrect').html(incorrect);		
	$('#gameArea').html('You are incorrect!<br><strong>Brooklyn Nets</strong> was the correct answer!<br>');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif" height="300" width="500"<br>');
	stopTick();
	setTimeout(q2, 3000);



	});

	function timeup () {


		incorrect++;
	$('#incorrect').html(incorrect);	
	alert('You Ran Out Of Time!');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif" height="300" width="500"<br>');
	stopTick();
	setTimeout(q2, 3000);

	
	}

  }

   function q2() {
  reset();
  counter = setInterval(timer, 1000);
  showQuestion();
	$('#gameArea').append('<br>Question 2) Which baseball team did Babe Ruth begin his career with?<br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">New York Yankees</button><br>'); 
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Chicago Cubs</button><br>');
	$('#gameArea').append('<br><button data-answer="false" class="btn btn-primary incorrect active">Brooklyn Dodgers</button><br>')
	$('#gameArea').append('<br><button data-answer="true" class="btn btn-primary active" id="answer">Boston Red Sox</button><br>')

	// Displays Correct Answer

	$('#answer').on('click', function() {
		stopTick();

		var audio = new Audio('assets/correct.wav');
   	audio.play();

		correct++;
	$('#correct').html(correct);	
	$('#gameArea').html('You are correct!<br>');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/RiYPRRTG81OA8/giphy.gif" height="300" width="500"<br>');
	setTimeout(q3, 2000);

	});
   
	// If User Chooses Incorrect Answer

	$('.incorrect').on('click', function() {
		stopTick();

		var audio = new Audio('assets/buzzer.wav');
   	audio.play();

		incorrect++;
	$('#incorrect').html(incorrect);	
	$('#gameArea').html('You are incorrect!<br><strong>Brooklyn Nets</strong> was the correct answer!<br>');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/RiYPRRTG81OA8/giphy.gif" height="300" width="500"<br>');
	setTimeout(q3, 2000);
	});

	function timeup () {


		incorrect++;
	$('#incorrect').html(incorrect);	
	alert('You Ran Out Of Time!');
	$('#gameArea').append('<br><img src="https://media.giphy.com/media/RiYPRRTG81OA8/giphy.gif" height="300" width="500"<br>');
	setTimeout(q3, 2000);
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
    
        var time = 20;
     
        function run(){
            counter = setInterval(timer, 1000);

        }

        function timer(){
            time--;
            $('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
            if (time <= 0){

                // Plays Buzzer Sound

                var audio = new Audio('assets/buzzer.wav');
   							audio.play();

   						
   							stopTick();
                // alert('Time Up!')
                
            };


          };

          run();

				  function reset(){
					clearTimeout(counter);
					time = 20;
				};
    });

});



       

      
    
  







