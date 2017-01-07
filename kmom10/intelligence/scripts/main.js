window.onload = function(){

var game_names, game_points, game_number, current_points, game_object;
var correct_answer;
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
	game_number = 2;
	console.log("Starting fizzbuzz!");
	
	/*
	Setting up the game board
	*/

	var board = document.getElementById('gameboard'), fizz_string = "<p style='margin-left: 2%'><b>Sequence:</b></p><p style='margin-left: 10%; font-size: 1.2em;'>";
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
		fizz_string += array[i];
		if(i == array.length - 1){
			fizz_string += ".";
		} else{
			fizz_string += ", ";
		}
	}
	fizz_string += "</p><hr><b><p style='margin-left: 2%;'>Guesses:</p></b><div style='margin-left: 10%; margin-top:-30px;'>";
	var rand_number = Math.ceil(Math.random() * 4);	
	var falses = 1;

	for(var j = 0; j < 5; j++){
		if(rand_number == j){
			buttons += '<button id="true_answer" type="submit" style="width: 58px; margin-top: 5px;">' + one + ', ' + two + '</button><br>';
		} else{
			var num1 = Math.floor((Math.random() * 100) + 1);
			var num2 = Math.floor((Math.random() * 100) + 1);
			buttons += '<button id="false_answer' + falses + '" type="submit" style="width: 58px; margin-top: 5px;"' +
					   'value="' + num1 + ', ' + num2 + '">' + num1 + ", " + num2 + '</button><br>'
			falses++;
		}
	}
	fizz_string += buttons + '</div>';

	board.innerHTML = fizz_string; 
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
	game_number = 3;
	var cards_arr = [];
	var current = 0;
	var board = document.getElementById('gameboard');
	var rules = document.getElementById('rules');
	var title = document.getElementById('title');
	var flags = {
					'1' : {'class' : 'sweden',
						   'name'  : 'Sweden'},
					'2' : {'class' : 'finland',
						   'name'  : 'Finland'},
					'3' : {'class' : 'colombia1 colombia2 colombia3',
						   'name'  : 'Colombia'},
					'4' : {'class' : 'japan circle',
						   'name'  : 'Japan'},
					'5' : {'class' : 'england',
						   'name'  : 'England'},
					'6' : {'class' : 'Chile',
						   'name'  : 'Chile'}
				}

	var flag_divs = "<div class='container-fluid'><div class='row flag-buffer'>";

	function specialflag(flag_name){
		if(flag_name == 'Colombia'){

			return '<div id="colombia"><div class="flag"> <div class="flex-row-container">'+
		                 '<div class="flex-row-item" id="colombia1"> </div> <div class="flex-row-item" id="colombia2"> </div>' +
		                 '<div class="flex-row-item" id="colombia3"> </div> </div> </div></div>';

		} else if (flag_name == 'Japan'){

			return  '<div class="flag" id="japan"> <div id="circle"> </div></div>';

		} else if (flag_name == 'Chile'){

			return  '<div class="flag" id="chile">' +
	                '<div class="flex-row-container"> <div class="flex-row-item" id="top-row-item">' +
	                '<div class="flex-col-container"> <div class="flex-col-item" id="left-col-item">' +
	                '<div id="star-five">  </div> </div> <div class="flex-col-item" id="right-col-item">' +
	                '</div> </div> </div> <div class="flex-row-item" id="btm-row-item"> </div> </div> </div>';

		}
	}

	function setup_cards(){
		for(var i = 0; i < 9; i++){	
			var num = Math.ceil(Math.random() * 6);
			console.log('This one is: ' + flags[num].name);
			cards_arr.push(num); 
		}  
		return cards_arr;
	} 

	function create_cards(){
		for(i = 0; i < cards_arr.length; i++){
			if (i == 3 || i == 6){
				flag_divs += "</div><div class='row flag-buffer'>"
			}
			if(flags[cards_arr[i]].name == 'Colombia' || flags[cards_arr[i]].name == 'Chile' || flags[cards_arr[i]].name == 'Japan'){
				flag_divs += "<div id='flag_" + i + "' class='flip-container col-xs-2 col-xs-offset-1'>" +
		            		"<div class='front'>" +
		            		"</div>" +
		            		"<div class='back'>" +
		            		specialflag(flags[cards_arr[i]].name) + 
		            		"</div>" +
		            		"</div>";
			} else{
				flag_divs += "<div id='flag_" + i + "' class='flip-container col-xs-2 col-xs-offset-1'>" +
			            		"<div class='front'>" +
			            		"</div>" +
			            		"<div class='back'>" +
			            		"<div id='" + flags[cards_arr[i]].class + "' class='flag'> </div>" + 
			            		"</div>" +
			            		"</div>";
		            }
		}
		board.innerHTML =  '<h3 class="text-center"> Memorize the flags </h3><div class="container-fluid"> <div class="row">' + flag_divs + '</div></div>';
		var myNodeList = document.getElementsByClassName('flip-container'); 
 


        for(var iterator = 0; iterator < myNodeList.length; iterator++){

        var el = document.getElementById(myNodeList["flag_" + iterator].id);
        el.id = iterator;
        //console.log(el); 
        el.style.transform = 'rotateY(180deg)';
        el.classList.add('flipper');
    } 
		window.setTimeout(() => {
		for(var iterator = 0; iterator < myNodeList.length; iterator++){  
        	var el = document.getElementById(myNodeList[iterator].id);
	        el.id = iterator; 
	        el.style.transform = 'rotateY(0deg)'; 
	        console.log("I'm done!");
		}  
	}, 5000);
	}

	function set_list(){
		console.log("I'm in");  
		var flag_list = "<br><div class='col-xs-4 col-xs-offset-4'><ol class='flagger'>";
		var array = [];
		console.log(cards_arr);
		cardss_arr = shuffle(cards_arr);
		console.log(cards_arr);
		for(var i = 0; i < cards_arr.length; i++){
			if(i == 0){
				flag_list += "<li class='lead set-bold' id='item_" + i + "'>" + flags[cards_arr[i]].name + "</li>"; 
			} else{
				flag_list += "<li id='item_" + i + "'>" + flags[cards_arr[i]].name + "</li>"; 
			}
		} 
		flag_list += "</ol></div>";
		board.innerHTML += flag_list; 

		array = shuffle(array);
		return cardss_arr;
	}

	function set_listeners(flags, arr, list_names){

		var myNodeList = document.getElementsByClassName('flip-container'); 
		window.setTimeout(() => {
        for(var iterator = 0; iterator < myNodeList.length; iterator++){ 
	        var el = document.getElementById(myNodeList[iterator].id);
	        el.id = iterator;
	        //console.log(el);  
	        start_tests(flags[list_names[0]].name);
	        el.addEventListener('click', function(){
	            animate(this);
	        });
	        var animate = function (sender){
	            sender.style.transform = "rotateY(0deg)";
	            sender.style.transform = "rotateY(180deg)";
	            sender.classList.add('flipper');  
	            test(arr, sender.childNodes[1].childNodes[0].id, sender, animate);
	        };
    }

	}, 2000)};

	function start_tests(flag){  
		console.log(flag);
		correct_answer = flag; 
	}

	function test(arr, flag, sender){ 

		var curr_item = document.getElementById('item_' + current);
		
		if((current_points + 1) == arr.length){
			alert("You got all the points! Well done! :)\nProceeding to next game!");
			game_points[2] = current_points;
			window.setTimeout(() => {board.innerHTML += '<button id="next_game" class="center-block">Next game</button>';
				document.getElementById('next_game').addEventListener('click', function(){
					game4();
				});
			}, 2000);
			return;
		}
		if(flag.toUpperCase() == correct_answer.toUpperCase()){
			curr_item.className = "";
			current_points++;
			current++;
			curr_item = document.getElementById('item_' + current);
			curr_item.classList.add('lead', 'set-bold');
			correct_answer = flags[arr[current]].name; 
		} else{
			alert("Sorry, you got the wrong flag...\nRemoving game.");
			var myNodeList = document.getElementsByClassName('flip-container');
			game_points[2] = current_points;
			for(var i = 0; i < myNodeList.length; i++){
				var el = document.getElementById(myNodeList[i].id); 
		        el.style.transform = "rotateY(180deg)";
		        el.classList.add('flipper');
			}
			window.setTimeout(() => {board.innerHTML += '<button id="next_game" class="center-block">Next game</button>';
				document.getElementById('next_game').addEventListener('click', function(){
					game4();
				});
			}, 2000);

		}
	}

	function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

		  return array;
		}

	board.innerHTML = '<h3 class="text-center">Click the button to display the flags.</h3><button id="start" class="center-block">Start timer</button>';

	document.getElementById('start').addEventListener('click', function(){
		var arr = setup_cards();
		create_cards();
		window.setTimeout(() => {
			var list_names = set_list(); 
			set_listeners(flags, arr, list_names);
		}, 5500);
	});
	rules.innerHTML = "<h3>Rules:</h3>" +
					  "This game is designed to test your picture memory.<br>" +
					  "You will be faced with nine flags. <br>Initially they are displayed face up, " +
					  "but after five seconds they will be flipped over.<br><br>" +
					  "After having been flipped over you will get an ordered list with nation's " +
					  "flag.<br><br>" +
					  "Your assignment is to match (click) each flag in the order of the list.";
	title.innerHTML = "Memory game!";

};

function game4(){
	var board = document.getElementById('gameboard');
	var rules = document.getElementById('rules');
	var title = document.getElementById('title');

	board.innerHTML = "";
	rules.innerHTML = "";
	title.innerHTML = "Game4";
}
    /**
     * Showing off how to display/hide parts of a SVG-image.
     */
    window.Test = (function() {
        'use strict';


        var test = { };

        function get_score(){
        	return game_points;
        }

        function go_to(game){
        	
        	console.log("Changing game");

        	if(game == 1){
        		game1();
        	} else if (game == 2){
        		game2();
        	} else if (game == 3){
        		game3();
        	}
        }

        function get_answer(){
        	return correct_answer;
        }

        function get_points(){
        	return current_points;
        }

        function reset(){
        	if(game_number == 1){
        		game1();
        	} else if (game_number == 2){
        		game2();
        	} else if (game_number == 3){
        		game3();
        	}
        } 


        // Return the object to make it visible.

       return {
       		reset : reset,
       		go_to : go_to, 
            get_answer:get_answer,
            get_score : get_score,
            get_points : get_points
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
