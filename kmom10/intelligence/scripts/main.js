window.onload = function(){

var game_names, game_points, game_number, current_points, game_object;

var start_game = function(){
	game_names = ['questions'];
	game_points = [0, 0, 0, 0, 0];
	current_points = 0;
	game_number = 1;
	game1();
};

var calculate_points = function(number){
	var curr_points = 0;
	if (number == 1){ 
		var chx = document.getElementsByTagName('input');
		for (var i=0; i<chx.length; i++) {
    // If you have more than one radio group, also check the name attribute
    // for the one you want as in && chx[i].name == 'choose'
    // Return true from the function on first match of a checked item
	    if (chx[i].type == 'radio' && chx[i].checked && chx[i].name == 'question_1') {
		     
		     if(game_object['question_1'].correct_answer == chx[i].value){
		     	curr_points += 3; 
	    	}
	    	  
		} else if (chx[i].type == 'radio' && chx[i].checked && chx[i].name == 'question_2'){
				
				if(game_object['question_2'].correct_answer == chx[i].value){
				     	curr_points += 3; 
			    	}

		} else if (chx[i].type == 'radio' && chx[i].checked && chx[i].name == 'question_3'){
			
				if(game_object['question_3'].correct_answer == chx[i].value){
				     	curr_points += 3; 
			    	}
		}


	}
	current_points += curr_points;
	game_points[0] = current_points;
}
}



var game1 = function(){
	var rules = document.getElementById('rules');
	rules.innerHTML = '<h3>Rules:</h3>' +
					  'This test is supposed to test your general knowledge. <br><br>' +
					  'In this game you will be faced with three individual questions.<br>' +
					  'Each question has three answers, one of which will be correct. <br>'  +
					  '<br><br>Each correct answer is worth 3 points.';
	var title = document.getElementById('title');
	title.innerHTML = 'General knowledge quiz';
	game_object = {
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
  	letters.innerHTML += '<button id="submit" type="submit" style="margin-left: 45%">Submit (next game)</button>';
  	document.getElementById('submit').addEventListener('click', next_game, false);
  	console.log(game_object['question_1'].correct_answer + " " + game_object['question_2'].correct_answer + " " + game_object['question_3'].correct_answer);
  	correct_answer = [game_object['question_1'].correct_answer, game_object['question_2'].correct_answer, game_object['question_3'].correct_answer];
};

function create_array(){

	var numbers = [];
	var counter = 0; 
	var indexes = [], multi = [];
	for(var i = 0; i < 5; i++){
		if(i == 4 && counter < 2){
			i = 0;
			indexes = [];
			numbers = [];
			counter = 0;
		}

		var number = Math.floor((Math.random() * 100) + 1);
		if(number % 3 == 0 || number % 5 == 0){
			numbers.push(number);
			indexes.push(i); //push index.
			counter++;
		} else{
		    numbers.push(number);
		}

	
	} 

	multi = [indexes, numbers];
	return multi;
}

function game2(){

	console.log("Starting fizzbuzz!");
	
	/*
	Setting up the game board
	*/

	var board = document.getElementById('gameboard'), fizz_string = "<p><b>Sequence:</b><hr>";
	var rules = document.getElementById('rules');
	var title = document.getElementById('title');
	title.innerHTML = 'FizzBuzz';
	var multi = create_array();
	var array = multi[1];
	var indexes = multi[0];
	var index_one = indexes[0], index_two = indexes[1];
	var one = array[index_one], two = array[index_two];
	var buttons = "<br>";
	console.log(one + ", " + two);

	rules.innerHTML = '<h3>Rules:</h3>' +
					  'This test is designed to test your basic maths skill. <br>' +
					  'During this test you will be faced with a sequence of 4 numbers and 2 words. <br>' +
					  "It's up to you to figure out what numbers hide behind the words using below formula. <br><br>"  +
					  "A number divisable by 3 will show as 'Fizz' and if it's divisable by 5 it will show as 'Buzz'." +
					  " If the number is divisable by both 3 and 5 it will show up as 'FizzBuzz'!" +  
					  '<br><br>A correct answer will grant you 3 points!';
	board.innerHTML = "";
	array = fizzbuzz(array, index_one, index_two);
	for(var i = 0; i < array.length; i++){
		fizz_string += (i + 1) + ": " + array[i] + "<br>"; 
	}
	fizz_string += "</p><hr><b>Guesses:</b>";
	var rand_number = Math.ceil(Math.random() * 4);	
	var falses = 1;

	for(var j = 0; j < 5; j++){
		if(rand_number == j){
			buttons += '<button id="true_answer" type="submit" style="width: 58px; margin-top: 5px; margin-left: 5px;">' + one + ', ' + two + '</button><br>';
		} else{
			var num1 = Math.floor((Math.random() * 100) + 1);
			var num2 = Math.floor((Math.random() * 100) + 1);
			buttons += '<button id="false_answer' + falses + '" type="submit" style="width: 58px; margin-top: 5px; margin-left: 5px;"' +
					   'value="' + num1 + ', ' + num2 + '">' + num1 + ", " + num2 + '</button><br>'
			falses++;
		}
	}

	board.innerHTML = fizz_string;
	board.innerHTML += buttons;
	board.innerHTML += "<hr><p>Choose an answer that you believe shows the correct sequence of the 'hidden' numbers.<br>For help, see <b>'Rules'</b> to your left!</p>";
	document.getElementById("true_answer").addEventListener('click', function(){
																	add_pts(true, board, [one, two], this.value);}, false);
	document.getElementById("false_answer1").addEventListener('click', function(){
																	add_pts(false, board, [one, two], this.value);}, false);
	document.getElementById("false_answer2").addEventListener('click', function(){
																	add_pts(false, board, [one, two], this.value);}, false);
	document.getElementById("false_answer3").addEventListener('click', function(){
																	add_pts(false, board, [one, two], this.value);}, false);
	document.getElementById("false_answer4").addEventListener('click', function(){
																	add_pts(false, board, [one, two], this.value);}, false);
};

function fizzbuzz(arr, num_one, num_two){

	
	if(arr[num_one] % 3 == 0 && arr[num_one] % 5 == 0){
		arr[num_one] = 'FizzBuzz';
	} else if (arr[num_one] % 3 == 0){
		arr[num_one] = 'Fizz';
	} else if (arr[num_one] % 5 == 0){
		arr[num_one] = 'Buzz';
	}

	if(arr[num_two] % 3 == 0 && arr[num_two] % 5 == 0){
		arr[num_two] = 'FizzBuzz';
	} else if (arr[num_two] % 3 == 0){
		arr[num_two] = 'Fizz';
	} else if (arr[num_two] % 5 == 0){
		arr[num_two] = 'Buzz';
	}
	return arr;
};

function add_pts(bool, board, correct, guess){
	console.log("I'm adding points now..." + bool);
	if(bool){
		board.innerHTML += "<hr>You were correct!<br>The correct guess was: <b>" + correct[0] + ", " + correct[1] + '</b>';
		current_points = 3;
		game_points[1] = 3;
	} else{
		board.innerHTML += "<hr>You were incorrect.<br>Your guess was: <b>" + guess + "</b><br>However, the correct guess was: <b>" + correct[0] + ", " + correct[1] + '</b>';
		current_points = 0;
		game_points[1] = 0;
	}

  	board.innerHTML += '<button id="submit" type="submit" style="margin-left: 45%">Submit (next game)</button>';
  	document.getElementById('submit').addEventListener('click', next_game, false);

}

function game3(){

	var board = document.getElementById('gameboard');
	var rules = document.getElementById('rules');
	var title = document.getElementById('title');

	board.innerHTML = "";
	rules.innerHTML = "";
	title.innerHTML = "Memory game!";

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

function get_score(){
	var out = 0;
	for(var i = 0; i < game_points.length; i++){
		out += game_points[i];
	}
	return out;
}
function next_game(){

	calculate_points(game_number);	
	console.log("Your current total score is: " + get_score());
	console.log("General: " + game_points[0]);
	console.log("Maths  : " + game_points[1]);
	console.log("Memory : " + game_points[2]);

	if (game_number == 1){
		game_number++;
		game2();
	}else if (game_number == 2){
		game_number++;
		game3();
	}

}

start_game();
}();
