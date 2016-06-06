$( document ).ready(function() {
console.log('I worked');
alert('Click Button To Begin Game!');


 $('#beginGame').on('click', function() {

 		// Makes Horn (Start) Noise 
 		var audio = new Audio('assets/tick.wav');
   	audio.play();

 		// Changes Button To Red
 		$('#beginGame').addClass('btn-danger');


 		// Tells If Buttons is incorrect or true
 		if ($(this).attr('data-answer') == false) {
 			alert('You Chose Wrong!');
 			
 		};

    // Timer Function
    
        var number = 20;
     
        function run(){
            counter = setInterval(decrement, 1000);
        }

        function decrement(){
            number--;
            $('#timer').html('<h4>' + 'Time Remaining: ' + number + '</h4>');
            if (number <= 0){

                // Plays Buzzer Sound

                var audio = new Audio('assets/buzzer.wav');
   							audio.play();

   							 stop();
                // alert('Time Up!')
            }
            
        }

        function stop(){
            clearInterval(counter);
        }
        run();









 })


});
