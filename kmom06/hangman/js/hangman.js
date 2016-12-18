/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.onload = function(){

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var guesses = [];
var incorrect = 0;
var possibilities = ["internet", "sverige", "island", "christmas", "kalle"];
var answer = possibilities[Math.floor(Math.random() * possibilities.length)];
var blank_answer = [];
var current_part = 0;


var start_game = function(){
    Hangman.hangman.hide('hill'); // jshint ignore:line
    Hangman.hangman.hide('gallow'); // jshint ignore:line
    Hangman.hangman.hide('body'); // jshint ignore:line
    Hangman.hangman.hide('rightarm'); // jshint ignore:line
    Hangman.hangman.hide('leftarm'); // jshint ignore:line
    Hangman.hangman.hide('leftleg'); // jshint ignore:line
    Hangman.hangman.hide('rightleg'); // jshint ignore:line
    Hangman.hangman.hide('rope'); // jshint ignore:line
    Hangman.hangman.hide('head'); // jshint ignore:line
    document.getElementById('buttons').innerHTML = '';
    document.getElementById('guess').innerHTML = '';
    guesses = [];
    incorrect = 0;
    blank_answer = [];
    current_part = 0;
    answer = possibilities[Math.floor(Math.random() * possibilities.length)];
    create_blank(answer);
    buttons();
    draw_guesses();
    console.log("New answer is " + answer);
};

    /**
     * Showing off how to display/hide parts of a SVG-image.
     */
    window.Hangman = (function() {
        'use strict';



          function peek(){
              return answer;
          }
        function wordlist() {
            return possibilities;
        }
        function guess(guess){
            make_guess(guess, true);
        }
        var hangman = {

            // Get all elements as their id
            "partAsElement": {
                "hill":     document.getElementById('hang_hill'),
                "gallow":   document.getElementById('hang_construction'),
                "body":     document.getElementById('hang_body'),
                "rightarm": document.getElementById('hang_rightarm'),
                "leftarm":  document.getElementById('hang_leftarm'),
                "rightleg": document.getElementById('hang_rightleg'),
                "leftleg":  document.getElementById('hang_leftleg'),
                "rope":     document.getElementById('hang_rope'),
                "head":     document.getElementById('hang_head')
            },

            // Create an array with all valid parts
            "validParts": [
                "hill",
                "gallow",
                "body",
                "rightarm",
                "leftarm",
                "rightleg",
                "leftleg",
                "rope",
                "head"
            ],


            /**
             * Check if part a valid part, writes error message to console if the part is invalid.
             *
             * @param string part Name of the part to check.
             *
             * @returns boolean true if valid part, else false.
             */
            "isValid": function (part) {

                if (this.validParts.indexOf(part) === -1) {
                    console.log("The part is not valid: " + part);
                    return false;
                }
                console.log("The part is valid: " + part);
                return true;

            },


            /**
             * Hide a part.
             *
             * @param string part Name of the part to hide.
             *
             * @returns void.
             */
            "hide": function (part) {

                if (this.isValid(part)) {
                    console.log("Hiding part: " + part);
                    this.partAsElement[part].style.display = "none";
                }

            },


            /**
             * Show a part.
             *
             * @param string part Name of the part to show.
             *
             * @returns void.
             */
            "show": function (part) {

                if (this.isValid(part)) {
                    console.log("Showing part: " + part);
                    this.partAsElement[part].style.display = "inline";
                }

            }
        };

        console.log("You can now use the hangman object as a part of the window-object. Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')\n\nHere are all the parts you can work on.");
        console.log(hangman.validParts);

        // Return the object to make it visible.

       return {
            hangman:hangman,
            wordlist:wordlist,
            peek:peek,
            guess:guess
      }; // jshint ignore:line
    })();


        // create alphabet ul
var buttons = function () {
  var myButtons = document.getElementById('buttons');
  var letters = document.createElement('ul');

  for (var i = 0; i < alphabet.length; i++) {
    letters.id = 'alphabet';
    var list = document.createElement('li');
    list.id = alphabet[i];
    list.innerHTML = alphabet[i].toUpperCase();
    myButtons.appendChild(letters);
    list.addEventListener("click", function(){
        console.log(guesses);
        if(guesses.indexOf(this.id) == -1){ // guess does not exist (hasn't been guessed)
            console.log("Guess: " + this.id);
            make_guess(this.id, false);
            this.style.background = "gray";
        } else{
            console.log("Already guessed!");
        }
    });
    letters.appendChild(list);
  }
};

var create_blank = function(answer){

for (var i = 0; i < answer.length; i++){

    blank_answer.push("_");

}
};

var draw_guesses = function(){

    var myguesses = document.getElementById('guess');
    var letters = document.createElement('ul');
    letters.id = 'guesses';
    letters.style.position = 'absolute';
    letters.style.bottom = '0';
    letters.style.left = '55%';
    for (var i = 0; i < blank_answer.length; i++) {
      var list = document.createElement('li');
      list.id = "blank_" + [i];
      list.innerHTML = blank_answer[i].toUpperCase();
      myguesses.appendChild(letters);
      letters.appendChild(list);
    }

};

var make_guess = function(guess, console_guess){
    var flag = false;
    if(console_guess){
        console.log("This is from the console");
        if(guesses.indexOf(guess) !== -1){
            console.log("already guessed!");
            return;
        }
        console.log(guess);
        console.log(document.getElementById('a'));
        document.getElementById(guess).style.background = 'gray';
    }
    for(var i = 0; i < answer.length; i++){
        if(guess == answer[i]){
            console.log("Your guess was correct, " + guess + " does exist in the hidden answer!");
            blank_answer[i] = guess;
            flag = true;
            console.log(answer);
            console.log(blank_answer.join(""));
            if(answer == blank_answer.join("")){
                window.alert("You won!");
                start_game();
            }
        }
    }
    guesses.push(guess);
    if(!flag){
        if(current_part == Hangman.hangman.validParts.length - 1){ // jshint ignore:line
            current_part++;
            Hangman.hangman.show(Hangman.hangman.validParts[current_part]); // jshint ignore:line
            window.alert("You just lost...");
            start_game();
        } else{
        Hangman.hangman.show(Hangman.hangman.validParts[current_part]); // jshint ignore:line
        current_part++;
        }
    }

    draw_guesses();
};

start_game();
console.log(blank_answer);
console.log(answer);
}();
