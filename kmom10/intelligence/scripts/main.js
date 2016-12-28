window.onload = function(){

var game_names, game_points, game_number, current_points;

var start_game = function(){
	game_names = ['questions'];
	game_points = [];
	current_points = 0;
	game_number = 1;
	game1();
};

var game1 = function(){
	var game_object = {
		'question_1' : {
					'question' 		   : 'Who is the current Queen of England?',
					'correct_answer'   : 'Queen Elizabeth II',
					'answers'		   : 
									[	 'Queen Elizabeth II',
										 'Queen Victoria',
										 'Queen Mary'
									]

					   },
		'question_2' : {
					'question' 		   : 'What is the capital of the UK?',
					'correct_answer'   : 'London',
					'answers'		   : [
										  'Birmingham',
										  'London',
										  'Edinburgh'
										 ]
					},
		'question_3' : {
					'question'		   : 'Who is the Prime minister of the UK?',
					'correct_answer'   : 'Theresa May',
					'answers'		   : [
										  'Theresa May',
										  'Jeremy Corbyn',
										  'David Cameron'
										 ]
					}
		}; 
	console.log(game_object['question_1'].answers);

    var myQuestions = document.getElementById('gameboard');
	var letters 	= document.createElement('ul');
	var question_string = '';
	letters.id = 'questions';
    letters.innerHTML = "";
    myQuestions.innerHTML = "";
    for (var i = 1; i <= 3; i++) {
	    var list = document.createElement('li');
	    list.id = 'question_' + i;
	    	for(var j = 0; j <= 2; j++){
	    		if(j == 0){
	    			question_string += '1 &nbsp; <input type="radio" name="question_' + i + '" value="' + game_object['question_'+i].answers[j] + '">' 
	    								+ game_object['question_'+i].answers[j] + '<br>';
 	    		} else if (j == 1){
 	    			question_string += 'x &nbsp; <input type="radio" name="question_' + i + '" value="' + game_object['question_'+i].answers[j] + '">' 
	    								+ game_object['question_'+i].answers[j] + '<br>';
 	    		} else{
 	    			question_string += '2 &nbsp; <input type="radio" name="question_' + i + '" value="' + game_object['question_'+i].answers[j] + '">' 
	    								+ game_object['question_'+i].answers[j] + '<br>';
 	    		}
	    		
	    	} 

	    list.innerHTML = game_object['question_' + i].question + '<form action="">' + question_string + '</form><br><br>';
	    list.classList.add('questions');
	    myQuestions.appendChild(letters); 
    	letters.appendChild(list);
    	question_string = '';
  }
  	letters.innerHTML += '<input type="submit" value="Submit answers" style="margin-left: 45%">';
  	console.log(game_object['question_1'].correct_answer + " " + game_object['question_2'].correct_answer + " " + game_object['question_3'].correct_answer);
  	correct_answer = [game_object['question_1'].correct_answer, game_object['question_2'].correct_answer, game_object['question_3'].correct_answer];
};

    /**
     * Showing off how to display/hide parts of a SVG-image.
     */
    window.Test = (function() {
        'use strict';


        var test = { };

        function get_answer(){
        	return correct_answer;
        }

        function reset(){
        	if(game_number == 1){
        		game1();
        	}
        } 


        // Return the object to make it visible.

       return {
            reset : reset,
            get_answer:get_answer
            // wordlist:wordlist,
            // peek:peek,
            // guess:guess
      }; // jshint ignore:line
    })(); 

start_game();
}();
