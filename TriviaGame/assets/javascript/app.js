$( document ).ready(function() {


// Global Variables 

	var correct = null;
	var incorrect = null;
	var questions = 5;
	var time = 10;
	var results = correct/questions;
	var tickerAudio;
	var currentQuestion = 0;

	var questionsList = [{
		question_text: 'Which of the following New York sports teams plays in the Barclays Center?',
		choices: ['New York Knicks', 'Brooklyn Nets', 'New York Giants', 'New York Rangers'],
		correct_answer: 1,
		gif: 'https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif'
	},{
		question_text: 'Which of the following New York sports teams plays in the Barclays Center?',
		choices: ['New York Knicks', 'Brooklyn Nets', 'New York Giants', 'New York Rangers'],
		correct_answer: 1,
		gif: 'https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif'
	},{
		question_text: 'Which of the following New York sports teams plays in the Barclays Center?',
		choices: ['New York Knicks', 'Brooklyn Nets', 'New York Giants', 'New York Rangers'],
		correct_answer: 1,
		gif: 'https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif'
	},{
		question_text: 'Which of the following New York sports teams plays in the Barclays Center?',
		choices: ['New York Knicks', 'Brooklyn Nets', 'New York Giants', 'New York Rangers'],
		correct_answer: 1,
		gif: 'https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif'
	}];



	    // Timer Function
	    
	function timer() {
			console.log('time');
			console.log(time);
	    time--;
	    $('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
	    if (time <= 0){
	    	tickerAudio.pause();
		    incorrect++;
		    $('#incorrect').html(incorrect);	
		    // alert('You Ran Out Of Time!');
				console.log('You Ran Out Of Time!');
				currentQuestion++;
				setTimeout(showQuestion, 3000);
				stopTick();
		    // Plays Buzzer Sound

		    var audio = new Audio('assets/buzzer.wav');
				audio.play();        
	    };

	};


  
 	function total() {
  tickerAudio.pause();

  var results = correct/questions * 100;

	$('#gameArea').html('<br>' + 'You Scored ' + results + '%' + '<br>');
	$('#gameArea').append('<br><button class="btn btn-default active" id="resetGame">Play Again?</button><br>'); 

	// Resets Game If Clicked

		$('#resetGame').on('click', function() {

			window.location.href="index.html";

		});
	
	};

	function showQuestion() {

 		tickerAudio = new Audio('assets/ticker.wav');
		tickerAudio.play();

		if (currentQuestion > 3) {
			total();
			return;
		}
		console.log('in show question', currentQuestion);
		$('#gameArea').html('');
   
	  time = 10;
	  $('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
	  counter = setInterval(timer, 1000);

		//when this is called, show the question from the questionId variable
		var question = questionsList[currentQuestion];


		$('#gameArea').append('<br><strong>Question 1:' + question.question_text + '</strong><br>');
	

		for (var i=0; i<question.choices.length;i++) {
			var choice = question.choices[i];
			var button = $('<button class="btn btn-primary active">');
			button.text(choice);

			if (question.correct_answer == i) {
				button.attr('data-correct', true);
				button.addClass('correct');
			} else {
				button.addClass('incorrect');
			}

			$('#gameArea').append(button); 	
		}


		$('.correct').on('click', function() {
			tickerAudio.pause();

			var audio = new Audio('assets/correct.wav');
	   	audio.play();

			correct++;
			$('#correct').html(correct);	
			$('#gameArea').html('You are correct!<br><br><img src="' + questionsList[currentQuestion].gif + '" height="300" width="500"<br>');

			currentQuestion++;

			stopTick();

			setTimeout(showQuestion, 3000);

		});
	   
		// If User Chooses Incorrect Answer

		$('.incorrect').on('click', function() {
			
			tickerAudio.pause();
			var audio = new Audio('assets/buzzer.wav');
	   	audio.play();
	 
			incorrect++;
			$('#incorrect').html(incorrect);		
			$('#gameArea').html('You are incorrect!<br><strong><br><br><img src="' + questionsList[currentQuestion].gif + '" height="300" width="500"<br>');

			currentQuestion++;

			stopTick();
			setTimeout(showQuestion, 3000);


		});		
	}







// Clears Counter

	function stopTick() {

 	 	clearInterval(counter);
  	$('#timer').html('<h4>' + 'Time Remaining: ' + time + '</h4>');
         
};

// Starts Game On Button Click

 $('#beginGame').on('click', function() {



 	 	// Disables the start button and appends clock to timer Div

 	$('#beginGame').prop('disabled', true);
 	console.log('time', time);
 	$('#timer').append(time);

	//show the first question;
	showQuestion(currentQuestion);


 		// Questions 






function reset(){
	clearTimeout(counter);
	time = 10;
};

});

});
    





       

      
    
  







