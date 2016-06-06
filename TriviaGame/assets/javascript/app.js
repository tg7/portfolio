$( document ).ready(function() {
// alert('Click Button To Begin Game!');


 $('#beginGame').on('click', function() {

 		// Disables the start button

 		$('#beginGame').prop('disabled', true);

 		// Makes Horn (Start) Noise 
 		var audio = new Audio('assets/tick.wav');
   	audio.play();

 		// Tells If Buttons is incorrect or true
 		if ($(this).attr('data-answer') == false) {
 			alert('You Chose Wrong!');
 			console.log('This is Wrong!');
 			
 		// Resets Button (Makes it Clickable Again)

 		};
 				function reset() {

 					$('#beginGame').prop('disabled', false);

 				}

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

   							reset()
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
