window.onload = function(){
/*
Declaring global variables.
*/
var game_names, game_points, game_number, current_points, game_object;
var correct_answer, timer, timer_2, stop_flag;
var start_game = function(){
	/*
	Assigning variables to immidiate globals.
	*/
	game_names = ['questions'];
	game_points = [0, 0, 0, 0, 0];
	current_points = 0;
	game_number = 1;
	game1();

};

var calculate_points = function(number){
	/*
	Helper function to assist with calculating score
	of game1.
	*/
	var curr_points = 0;
	if (number == 1){
		var chx = document.getElementsByTagName('input');
		for (var i=0; i<chx.length; i++) {

	    if (chx[i].type == 'radio' && chx[i].checked && chx[i].name == 'question_1') {

		     if(game_object.question_1.correct_answer == chx[i].value){
		     	curr_points += 3;
	    	}

		} else if (chx[i].type == 'radio' && chx[i].checked && chx[i].name == 'question_2'){

				if(game_object.question_2.correct_answer == chx[i].value){
				     	curr_points += 3;
			    	}

		} else if (chx[i].type == 'radio' && chx[i].checked && chx[i].name == 'question_3'){

				if(game_object.question_3.correct_answer == chx[i].value){
				     	curr_points += 3;
			    	}
		}


	}
	current_points += curr_points;
	game_points[0] = current_points;
}
};



var game1 = function(){

	/*
	Overall functionality of game1
	*/
	game_number = 1;
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
	    		if(j === 0){
	    			question_string += '1 &nbsp; <input id="q'+i+'b'+j+'" type="radio" name="question_' + i + '" value="'+ game_object['question_'+i].answers[j] +'">' +
	    								'<label for="q'+i+'b'+j+'">'+ game_object['question_'+i].answers[j] + '</label><br>';
 	    		} else if (j == 1){
 	    			question_string += 'x &nbsp; <input id="q'+i+'b'+j+'" type="radio" name="question_' + i + '" value="'+ game_object['question_'+i].answers[j] +'">' +
	    								'<label for="q'+i+'b'+j+'">'+ game_object['question_'+i].answers[j] + '</label><br>';
 	    		} else{
 	    			question_string += '2 &nbsp; <input id="q'+i+'b'+j+'" type="radio" name="question_' + i + '" value="'+ game_object['question_'+i].answers[j] +'">' +
	    								'<label for="q'+i+'b'+j+'">'+ game_object['question_'+i].answers[j] + '</label><br>';
 	    		}
				//var btn = document.getElementById('q'+i+'b'+j);
				//console.log(btn);
				//btn.addEventListener('click', function(){
				//	diable_group(i);
				//});
	    	}

	    list.innerHTML = game_object['question_' + i].question + '<form action="" id ="form' + i + '">' + question_string + '</form><br><br>';
	    list.classList.add('questions');
	    myQuestions.appendChild(letters);
    	letters.appendChild(list);
    	question_string = '';
  }
  	letters.innerHTML += '<button id="submit" type="submit" style="margin-left: 45%">Submit (next game)</button>';
  	document.getElementById('submit').addEventListener('click', function(){
  		next_game(1);
  	});
	function game1_listeners(){
		function disable_group(group){
				var parent = document.getElementsByName(group.name);
				for(var i = 0; i < parent.length; i++){
					if(game_object[parent[i].name].correct_answer === parent[i].value){
						parent[i].labels[0].style.color = 'green';
						console.log("I'm the correct answer: " + game_object[parent[i].name].correct_answer);
					} else {
						parent[i].labels[0].style.color = 'red';
					}
					var btn = document.getElementById(parent[i].id);
					btn.disabled = true;
				}
		}

		for(var j = 1; j <= 3; j++){
		for(var iter = 0; iter <= 2; iter++){
				var btn = document.getElementById('q'+j+'b'+iter);
				btn.addEventListener('click', function(){
					disable_group(this);
				}, false);
			}
		}

	}
	game1_listeners();
  	correct_answer = [game_object.question_1.correct_answer, game_object.question_2.correct_answer, game_object.question_3.correct_answer];
};

function create_array(){

	/*
	Helper function for game2. Intializes a multi-demensional array.
	*/
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
		if(number % 3 === 0 || number % 5 === 0){
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
	correct_answer = "This right answer is '" + (one + ", " + two) + "'";

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
					   'value="' + num1 + ', ' + num2 + '">' + num1 + ", " + num2 + '</button><br>';
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
}

function fizzbuzz(arr, num_one, num_two){

	/*
	Helper function for game2.
	Assists with the creation of the fizzbuzz string
	by using the modulus operand and returning the resulting array.
	*/
	if(arr[num_one] % 3 === 0 && arr[num_one] % 5 === 0){
		arr[num_one] = 'FizzBuzz';
	} else if (arr[num_one] % 3 === 0){
		arr[num_one] = 'Fizz';
	} else if (arr[num_one] % 5 === 0){
		arr[num_one] = 'Buzz';
	}

	if(arr[num_two] % 3 === 0 && arr[num_two] % 5 === 0){
		arr[num_two] = 'FizzBuzz';
	} else if (arr[num_two] % 3 === 0){
		arr[num_two] = 'Fizz';
	} else if (arr[num_two] % 5 === 0){
		arr[num_two] = 'Buzz';
	}
	return arr;
}

function add_pts(bool, board, correct, guess){

	/*
	General helper function that sets the point of game2.
	*/

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
	/*
	General functionality of game3.
	Re-using most of the previous flag-labs, but adding some functionality.
	Such as different eventListeners, timing events etc.

	As with the two others this uses primitive DOM to work;
	ie. it uses innerHTML for most of it's work, which is considered
	bad practice both for security reasons, but also for productivity.

	The reason I used this was to ensure I had an understanding of how
	to program in that particular manner, as it was part of the course.
	*/

	/*
	Declaring, intiating and assigning values to variables used in the function.
	*/
	game_number = 3;
	var cards_arr = [];
	var current = 0;
	var current_correct;
	current_points = 0;
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
				};

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
		/*
		Sets up the card array that is used in later functions.
		*/
		var correct_string = "These are the cards (1 = top-left, 9 = bottom-right):\n\n" +
							 "Number:\t\t\tFlag:\n";
		for(var i = 0; i < 9; i++){
			var num = Math.ceil(Math.random() * 6);
			correct_string += (i + 1) + ":\t\t\t\t" + flags[num].name + '\n';
			cards_arr.push(num);
		}
		correct_answer = correct_string;
		return cards_arr;
	}

	function create_cards(){
		/*
		Creates the card's HTML objects using primitve DOM.
		*/
		for(var i = 0; i < cards_arr.length; i++){
			if (i == 3 || i == 6){
				flag_divs += "</div><div class='row flag-buffer'>";
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
		window.setTimeout(() => { // jshint ignore:line
		for(var iterator = 0; iterator < myNodeList.length; iterator++){
        	var el = document.getElementById(myNodeList[iterator].id);
	        el.id = iterator;
	        el.style.transform = 'rotateY(0deg)';
		}
	}, 5000);
	}

	function set_list(){
		/*
		Sets up the list of cards, ie. not a list in programmatic terms,
		but the HTML-list.

		This is done by shuffling the cards_array in the
		Fisher-Yates suffling algo (de-facto shuffling).
		*/
		var flag_list = "<br><div class='col-xs-4 col-xs-offset-4'><ol class='flagger'>";
		var array = [];
		var cardss_arr = shuffle(cards_arr);
		for(var i = 0; i < cards_arr.length; i++){
			if(i === 0){
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
		/*
		Gives each card on the gameboard
		an individual eventlistener that listens
		to 'click'-events.
		*/
		var myNodeList = document.getElementsByClassName('flip-container');
		window.setTimeout(() => { // jshint ignore:line
        for(var iterator = 0; iterator < myNodeList.length; iterator++){
	        var el = document.getElementById(myNodeList[iterator].id);
	        el.id = iterator;
	        //console.log(el);
	        start_tests(flags[list_names[0]].name);
	        el.addEventListener('click', function handler(e){
				//remove eventListener to ensure no double-clicks.
	        	e.currentTarget.removeEventListener(e.type, handler);
	            animate(this, e);
	        });
	        var animate = function (sender){
	            sender.style.transform = "rotateY(0deg)";
	            sender.style.transform = "rotateY(180deg)";
	            sender.classList.add('flipper');
	            test(arr, sender.childNodes[1].childNodes[0].id, sender, animate);
	        };
    }

	}, 2000);}

	function start_tests(flag){
		current_correct = flag;
		//correct_answer = flag;
	}

	function test(arr, flag){
		/*
		Tests the clicked card to see if it corresponds
		to the currently highlighted item in the list.
		*/
		var curr_item = document.getElementById('item_' + current);

		if((current_points + 1) == arr.length){
			window.alert("Impressive, you got all the points! Well done! :)\nProceeding to next game!");
			current_points++;
			game_points[2] = current_points;
			window.setTimeout(() => {board.innerHTML += '<button id="next_game" class="center-block">Next game</button>'; // jshint ignore:line
				document.getElementById('next_game').addEventListener('click', function(){
					next_game();
				});
			}, 2000);
			return;
		}
		if(flag.toUpperCase() == current_correct.toUpperCase()){
			curr_item.className = "";
			current_points++;
			current++;
			curr_item = document.getElementById('item_' + current);
			curr_item.classList.add('lead', 'set-bold');
			current_correct = flags[arr[current]].name;
		} else{
			window.alert("Sorry, you got the wrong flag...\nRemoving game.");
			var myNodeList = document.getElementsByClassName('flip-container');
			game_points[2] = current_points;
			for(var i = 0; i < myNodeList.length; i++){
				var el = document.getElementById(myNodeList[i].id);
		        el.style.transform = "rotateY(180deg)";
		        el.classList.add('flipper');
			}
			window.setTimeout(() => {board.innerHTML += '<button id="next_game" class="center-block">Next game</button>'; // jshint ignore:line
				document.getElementById('next_game').addEventListener('click', function(){
					next_game();
				});
			}, 2000);

		}
	}

	function shuffle(array) {
		/*

		Shuffles a list using the Fisher-Yates shuffle algorithm
		This particular implementation was taken from StackOverflow.
		No credits to me, all to Fisher-Yates for the algorithm.

		*/
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
	var arr = setup_cards();
	document.getElementById('start').addEventListener('click', function(){
		create_cards();
		window.setTimeout(() => { // jshint ignore:line
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

}

function game4(){
	/*
	General functionality for game4.

	Important to note that I used more advanced functionality in this game.
	In this function I used nodes rather than focusing on innerHTML-code.

	Each immidiate child of the basic objects (gameboard, rules) are implemented
	with innerHTML, but only once. Simply to create parents for their own children.

	So in essence we use the gameboard as a parent to the plain innerHTML-objects
	we are creating. Everthing to do with said objects are done using more
	advance code and all it's children are specified as childNodes rather
	than direct children (no innerHTML).

	*/

	/*
	Declaring, initiating and assigning values to variables.
	*/
	var board = document.getElementById('gameboard');
	var rules = document.getElementById('rules');
	var title = document.getElementById('title');
	var object_array = [];
	var current = 0; // current works as an iterator in this scope.
	game_number = 4;
	/*
	Each object has an id, string, form and color.
	*/
	var object = function(id, string, form, color){
		this.id = id;
		this.string = string; //The output string used in the list.
		this.form = form;
		this.color = color;
	};

	/*
	Each form is it's own object with both classname and name, both
	assigned to an id..
	*/

	var form_object = {
					'1' : {'class' : 'square',
						   'name'  : 'square'},
					'2' : {'class' : 'circle',
						   'name'  : 'circle'},
					'3' : {'class' : 'triangle',
						   'name'  : 'triangle'},
					'4' : {'class' : 'rectangle',
						   'name'  : 'rectangle'}
				};
	/*
	Similar to above object.
	*/

	var color_object = {
					'1' : { 'class' : 'white',
							'name'  : 'white'},
					'2' : { 'class' : 'black',
							'name'  : 'black'},
					'3' : { 'class' : 'red',
							'name'  : 'red'},
					'4' : { 'class' : 'blue',
							'name'  : 'blue'},
					'5' : { 'class' : 'green',
							'name'  : 'green'}
				};
	var correct_string = 'This is the list of objects you should click, in numeric order:\n\n' +
						 'Number:\t\tObject:\n';
	for(var i = 0; i < 10; i++){
		var color = Math.ceil(Math.random() * 5);
		var form = Math.ceil(Math.random()  * 4);
		var o = Object.create(object, {id     : {value: i},
									   string : {value: 'Click the ' + color_object[color].name + " " + form_object[form].name + "."},
									   form   : {value: form_object[form].name},
									   color  : {value: color_object[color].name}});
		object_array.push(o);
		correct_string += (i + 1) + ':\t\t\t' + o.string + "\n";
	}
	correct_answer = correct_string;
	board.innerHTML = "<h3 class='text-center'>Click the button to start the test!</h3>"  +
					  "<p class='text-center'>The timer (15s) starts when you click the button.</p><br>";
	var start_button = document.createElement('Button');
	var start_button_text = document.createTextNode('Start game');
	start_button.appendChild(start_button_text);
	start_button.classList.add('center-block');
	start_button.addEventListener('click', function(){
		start_4();
	});

	var board_node = document.getElementById('gameboard');
	board_node.appendChild(start_button);

	rules.innerHTML = "<h3>Rules:</h3>" +
					  "This game is designed to test your visual intelligence.<br>" +
					  "You will be given a list and 10 randomly generated objects<br><br>" +
					  "It's your job to click the object that most closely matches the highlighted object in the list." +
					  "<br><br>Items in the list might be <b>'Click the white circle'</b> or <b>'Click the black square'</b>";
	title.innerHTML = "Visual intelligence";

	function start_4(){
		/*
		Simply starts the game for real by
		reseting the board.
		*/

		current_points = 0;

		timer = window.setTimeout(function(){

										end_test();

											}, 15000);

		function end_test(){
				window.clearTimeout(timer);
				board.innerHTML = "";
				board.innerHTML = "<h3 class='text-center'>You have finished this test. Click the button to proceed to the next!</h3>" +
								  "<p class='text-center'> You gained: " + current_points + " points. </p>";
				var button_end = document.createElement("Button");
				var button_end_text = document.createTextNode("Next game");
				button_end.addEventListener('click', function(){
					next_game();
				});
				var game_board = document.getElementById('gameboard');
				button_end.appendChild(button_end_text);
				button_end.classList.add('center-block');
				game_board.appendChild(button_end);
				game_points[3] = current_points;
		}

		board.innerHTML = "<div id='top-half' class='top'></div><div id='bottom-half' class='bottom'></div>";
		//setting up board:
		var btm = document.getElementById('bottom-half');
		var ordered_list = document.createElement("OL");
		ordered_list.id = 'theList';
		ordered_list.classList.add("top-padding");
		for(i = 0; i < object_array.length; i++){
			var list_item    = document.createElement("LI");
			var text         = document.createTextNode(object_array[i].string);
			list_item.appendChild(text);
			ordered_list.appendChild(list_item);
		}
		ordered_list.childNodes[0].classList.add('set-bold', 'current');
		btm.appendChild(ordered_list);

		function create_top(object_array){
			/*
			Creates the top-half of the game.
			*/
			var top = document.getElementById('top-half');

			for(var i = 0; i < object_array.length; i++){
				var object = object_array[i];
				var div_object = document.createElement('div');
	            var randTop =  Math.floor((Math.random() * 40) + 12) + "%";
	            var randLeft = Math.floor((Math.random() * 53) + 20) + "%";

	            if(object.form == 'triangle'){
	            	div_object.classList.add(object.form);
	            	div_object.style.borderColor = "transparent transparent " + object.color + " transparent";
	            	div_object.id = object.color + " " + object.form;
	            } else {
					div_object.classList.add(object.color, object.form);
				}
				div_object.style.position = "absolute";
				div_object.style.top = randTop;
				div_object.style.left = randLeft;
				div_object.style.zIndex = i;
				div_object.addEventListener('click', function(){
					test_object(this, object);
				});

				top.appendChild(div_object);
			}
		}
		function test_object(sender){
			/*
			Tests the sender (div)'s values to see if it matches
			the item that SHOULD be pressed.
			*/

			if(current == 9){
				current_points++
				end_test();
				return;
			}
			var ol;
			if(object_array[current].string == "Click the " + sender.classList.value + "." ||
			   object_array[current].string == "Click the " + sender.id + "."){
				ol = document.getElementById('theList');
				ol.childNodes[current].classList = "";
				current++;
				ol.childNodes[current].classList.add('set-bold', 'current');
				sender.classList = "";
				current_points++;
			} else {
				ol = document.getElementById('theList');
				ol.childNodes[current].classList = "";
				ol.childNodes[current].classList.add('set-bold', 'error');
				current++;
				ol.childNodes[current].classList.add('set-bold', 'current');
				sender.classList = "";
			}
		}
		var button = document.createElement("Button");
		var button_text = document.createTextNode("Reset positioning and timer.");
		button.appendChild(button_text);
		button.addEventListener('click', function(){
			Test.reset();
		});
		button.classList.add('button_setting');
		btm.appendChild(button);
		create_top(object_array);
}
}

function game5(){
	/*
	Sets up the general functionality of game4.

	As with game4 we are using more dynamic and advanced code to handle
	DOM objects rather than using the primitve innerHTMl.
	*/

	var board = document.getElementById('gameboard');
	var rules = document.getElementById('rules');
	var title = document.getElementById('title');
	stop_flag = false;
	current_points = 0;
	board.innerHTML = "<h3 class='text-center'>Click the button to start the test</h3><p class='text-center'><b>WARNING:</b>  Each object is shown for 1 second.</p>";
	rules.innerHTML = "<h3>Rules:</h3>" +
					  "This test is designed to test your perception.<br><br>" +
					  "You will be presented with an object which you need to decide to click or not. <br><br>" +
					  "You should click an element that is: <br><br><ul>" +
					  "<li> Any color but red </li><li>Any form but square</li><li>Both red and square</li></ul>" +
					  "Any correct decision gives you one point.<br><br>Each object is shown for 1 second!";
	title.innerHTML = "Perception";
	var object_array = [];
	game_number = 5;
	var object = function(id, string, form, color){
		this.id = id;
		this.string = string;
		this.form = form;
		this.color = color;
	};

	var form_object = {
					'1' : {'class' : 'square',
						   'name'  : 'square'},
					'2' : {'class' : 'circle',
						   'name'  : 'circle'},
					'3' : {'class' : 'triangle',
						   'name'  : 'triangle'},
					'4' : {'class' : 'rectangle',
						   'name'  : 'rectangle'}
				};
	var color_object = {
					'1' : { 'class' : 'white',
							'name'  : 'white'},
					'2' : { 'class' : 'black',
							'name'  : 'black'},
					'3' : { 'class' : 'red',
							'name'  : 'red'},
					'4' : { 'class' : 'blue',
							'name'  : 'blue'},
					'5' : { 'class' : 'green',
							'name'  : 'green'}
				};
	var correct_string = 'Here is a list of the items that will show up, in numeric order:\n' +
						 'Number:\t\tForm:\t\tColor:\n';
	for(var i = 0; i < 10; i++){
		var color = Math.ceil(Math.random() * 5);
		var form = Math.ceil(Math.random()  * 4);
		var o = Object.create(object, {id     : {value: i},
									   string : {value: 'Click the ' + color_object[color].name + " " + form_object[form].name + "."},
									   form   : {value: form_object[form].name},
									   color  : {value: color_object[color].name}});
		object_array.push(o);
		if(o.color !== 'red'){
			correct_string += (i + 1) + ":\t\t\t" + o.color + "\t\t" + o.form + "\n";
		} else {
			correct_string += (i + 1) + ":\t\t\t" + o.color + "\t\t\t" + o.form + "\n";
		}
	}

	correct_answer = correct_string;
	var start_button = document.createElement('Button');
	var start_button_text = document.createTextNode('Start game');
	start_button.appendChild(start_button_text);
	start_button.classList.add('center-block');
	start_button.addEventListener('click', function(){
		start_5();
	});

	board.appendChild(start_button);

	function start_5(){
		var bad_object = false;
		var clicked = false;
		board.innerHTML = "";
		show_object(object_array, 0);

		function show_object(objects, iterator){


			if(stop_flag){
				stop_flag = false;
				return;
			}

			timer = window.setTimeout(function(){
				if(clicked === false && bad_object === true){
					current_points++;
					console.log("I was an unclicked, bad object");
				}
				clicked = false;
				board.innerHTML = "";
			    timer_2 = window.setTimeout(function(){
				var div_object = document.createElement('div');
				div_object.classList.add('center_object');
	            if(objects[iterator].form == 'triangle'){
	            	div_object.classList.add(objects[iterator].form);
	            	div_object.style.borderColor = "transparent transparent " + objects[iterator].color + " transparent";
	            	div_object.id = objects[iterator].color + " " + objects[iterator].form;
	            } else {
					div_object.classList.add(objects[iterator].color, objects[iterator].form);
				}
				div_object.style.position = "absolute";
				div_object.style.zIndex = i;
				div_object.addEventListener('click', function(){
					test_object(object_array[iterator - 1]);
				});
				if((objects[iterator].color == 'red' && objects[iterator].form == 'square')){
				  	bad_object = false;
				  } else if ((objects[iterator].form != 'square' && objects[iterator].color != 'red')){
				  	bad_object = false;
				  } else {
				  	bad_object = true;
				  }
				board.appendChild(div_object);
				iterator++;
				if(iterator == 10){

					if(clicked === false && bad_object === true){
							current_points++;
						}
						finalize();
					return;
				}
				show_object(object_array, iterator);
			}, 1000);
			}, 1000);

			function test_object(sender){
				clicked = true;
				if(sender.form == 'square' && sender.color == 'red'){
					current_points++;
				} else if (sender.form != 'square' && sender.color != 'red'){
					current_points++;
				} else{
				}
			}
		}
	}
}
	function finalize(){
		var board = document.getElementById('gameboard');
		var rules = document.getElementById('rules');
		var title = document.getElementById('title');
		var finish_button = document.createElement('Button');
		var finish_button_text = document.createTextNode('Check score');

		game_points[4] = current_points;
		finish_button.appendChild(finish_button_text);
		finish_button.classList.add('center-block');
		finish_button.addEventListener('click', function(){
			this.classList.add('hidden');
			var score = score_it();
			var text = document.createTextNode("Your score is: " + score + "/41");
			var node = document.createElement("H1");
			node.classList.add("text-center");
			node.appendChild(text);
			board.appendChild(node);
		});
		rules.innerHTML = '';
		title.innerHTML = 'We are done!';
		board.innerHTML = "<h3 class='text-center'>We are now finished.</h3><br><p class='text-center'>Click the button to let me analyze your score.</p>";
		board.appendChild(finish_button);
		function score_it(){
			var arr = game_points;
			return (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
		}
	}
    /**
     * Showing off how to display/hide parts of a SVG-image.
     */
    window.Test = (function() {
        'use strict';
		function help(){

			var help_string = "The Test-object comes with a bunch of functions that might be useful:\n\n" +
							  "\tTest.get_score();  - returns your accumilated score in an array.\n" +
							  "\tTest.go_to(int);   - sends you to the game (1-5). Helps you with debugging!\n" +
							  "\tTest.get_answer(); - will return the answers of the current game. If possible.\n" +
							  "\tTest.get_points(); - returns the score of your current game (in session).\n" +
							  "\tTest.reset();      - resets the current game.\n" +
							  "\tTest.help();       - shows this string.\n\n";
			console.log(help_string);

		}
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
        	} else if (game == 4){
        		game4();
        	} else {
        		game5();
        	}
			reset();
        }

        function get_answer(){
        	return correct_answer;
        }

        function get_points(){
        	return current_points;
        }

        function reset(){
			window.clearTimeout(timer);
			window.clearTimeout(timer_2);
			stop_flag = true;
			current_points = 0;
        	if(game_number == 1){
				game_points[0] = 0;
        		game1();
        	} else if (game_number == 2){
				game_points[1] = 0;
        		game2();
        	} else if (game_number == 3){
				game_points[2] = 0;
				game3();
        	} else if (game_number == 4){
				game_points[3] = 0;
				game4();
        	} else if (game_number == 5){
				game_points[4] = 0;
				game5();
        	}
        }


        // Return the object to make it visible.

       return {
       		reset : reset,
       		go_to : go_to,
            get_answer:get_answer,
            get_score : get_score,
            get_points : get_points,
			help : help
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
	if(game_number == 1 || game_number == 2){
		calculate_points(game_number);
	}
	current_points = 0;
	console.log("Your current total score is: " + get_score());
	console.log("General     : "     + game_points[0]);
	console.log("Maths       : "     + game_points[1]);
	console.log("Memory      : "     + game_points[2]);
	console.log("Visual      : "     + game_points[3]);
	console.log("Perception  : "     + game_points[4]);

	if (game_number == 1){
		game2();
	}else if (game_number == 2){
		game3();
	} else if (game_number == 3){
		game4();
	} else if (game_number == 4){
		game5();
	}

}

start_game();
}();
