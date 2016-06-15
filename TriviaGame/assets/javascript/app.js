$( document ).ready(function() {

// Global Variables 

	var correct = null;
	var incorrect = null;
	var questions = 5;
	var time = 10;
	var results = correct/questions;
	var tickerAudio;
	var currentQuestion = 0;

// Questions 

	var questionsList = [{
		question_text: 'Which of the following New York sports teams plays in the Barclays Center?',
		choices: ['New York Knicks', 'Brooklyn Nets', 'New York Giants', 'New York Rangers'],
		correct_answer: 1, 
		response: 'The Brooklyn Nets play at the Barclays Center',
		gif: 'https://media.giphy.com/media/nMdd7KBqLTomk/giphy.gif'
	},{
		question_text: 'Who is the only team to come back from an 0-3 deficit in an MLB Playoff Series?',
		choices: ['New York Yankees', 'New York Mets', 'San Francisco Giants', 'Boston Red Sox'],
		correct_answer: 3,
		response: 'The Red Sox came back from 0-3 to win the series 4-3, in the 2004 ALCS',
		gif: 'https://media.giphy.com/media/AwObdvFae9ItO/giphy.gif'
	},{
		question_text: 'Who has the scored the most points in a quarter in an NBA game?',
		choices: ['Kobe Bryant', 'Wilt Chamberlin', 'Klay Thompson', 'Lebron James'],
		correct_answer: 2,
		response: 'Klay Thompson - 37 points',
		gif: 'https://media.giphy.com/media/1idQ5FW9lpJZu/giphy.gif'
	},{
		question_text: 'Who won the 2014 NBA Championship?',
		choices: ['Cleveland Cavaliers', 'Miami Heat', 'Golden State Warriors', 'San Antonio Spurs'],
		correct_answer: 3,
		response: 'The San Antonio Spurs won the 2014 NBA Championship defeating the Miami Heat',
		gif: 'https://media4.giphy.com/media/3o7abyE8LFnuXftvfW/200.gif'
	},{
		question_text: 'Who was the #1 overall pick in the NHL Draft?',
		choices: ['Alexander Ovechkin', 'Sidney Crosby', 'Evgeni Malkin', 'Phil Kessel'],
		correct_answer: 0,
		response: 'Alexander Ovechkin was the #1 pick drafted by the Washington Capitals',
		gif: 'https://media.giphy.com/media/13sEBkcYILqU6c/giphy.gif'
	}];
	
	// Timer Function
	    
	function timer() {
			console.log(time);
	    	time--;
	    		$('#timer').html('<h4 class="sideBarText">' + 'Time Remaining: ' + time + '</h4>');
			    	if (time <= 0){
			    	tickerAudio.pause();
				    incorrect++;
				  $('#incorrect').html(incorrect);	
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
 		tickerAudio = new Audio('assets/tickTock.wav');
		tickerAudio.play();

		if (currentQuestion > 4) {
			total();
			return;
		}
			
	// Shows Current Question being displayed
	console.log('question #', currentQuestion);

	$('#gameArea').html('');
   
		time = 10;
	  $('#timer').html('<h4 class="sideBarText">' + 'Time Remaining: ' + time + '</h4>');
	  counter = setInterval(timer, 1000);

		//Shows the question from the questionId variable
		var question = questionsList[currentQuestion];
		// console.log(question);

		//Appends Question Text to Screen
		$('#gameArea').append('<br><strong>Question:</strong> ' + question.question_text + '<br>');
		console.log(question.question_text);
	
		for (var i=0; i<question.choices.length;i++) {
			var choice = question.choices[i];
			var button = $('<button class="btn btn-default active buttonStyle">');
			button.text(choice);

			if (question.correct_answer == i) {
					button.attr('data-correct', true);
					button.addClass('correct');
			} else {
					button.addClass('incorrect');
			}

			$('#gameArea').append(button); 	
		};


		$('.correct').on('click', function() {
			tickerAudio.pause();

			var audio = new Audio('assets/correct.wav');
	   	audio.play();

			correct++;
				$('#correct').html(correct);	
				$('#gameArea').html('<h4>You are correct!</h4>' + '<em>' + question.response + '</em>' + '<br>' + '<br><img src="' + questionsList[currentQuestion].gif + '" height="300" width="500"<br>');

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
				$('#gameArea').html('<h4>You are incorrect!</h4>' + '<em>' + question.response + '</em>' +'<br>' + '<br><img src="' + questionsList[currentQuestion].gif + '" height="300" width="500"<br>');

			currentQuestion++;

			stopTick();
			setTimeout(showQuestion, 3000);

		});		
	}

// Clears Counter

	  function stopTick() {

 	 	clearInterval(counter);
  	$('#timer').html('<h4 class="sideBarText">' + 'Time Remaining: ' + time + '</h4>');
         
		};

// Starts Game On Button Click

	  $('#beginGame').on('click', function() {

 	 	// Disables the start button and appends clock to timer Div

	 	$('#beginGame').prop('disabled', true);
	 	console.log('time', time);
	 	$('#timer').append(time);

	//Shows the Question;
		showQuestion(currentQuestion);

 		// Resets Questions 

		function reset(){
			clearTimeout(counter);
			time = 10;
		};

	});

});
    





       

      
    
  







