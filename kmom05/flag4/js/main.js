(function(){
    'use strict';

    //var myContent = document.getElementById('content');

    //myContent.innerHTML = '<h3>This is a template!</h3>';

    console.log('Sandbox is ready!');
    var counter = 0;
    document.getElementById('guess_counter').innerHTML = "<b>Guesses: </b>" + counter;
    var guess_counter = 0;
    var prev_card;
    var matches = 0;
    var guessed_cards = new Array(2);
    var myNodeList = document.getElementsByClassName('flip-container');
    var myCardArray = new Array(10);

    start();

    function randomizeBlocks(currPos){
		var randNr = Math.floor((Math.random() * 5) +1);

		while (checkForDuplicates(randNr)){
				randNr = Math.floor((Math.random() * 5) +1);
		}
		myCardArray[currPos] = randNr;
	}

	function checkForDuplicates(nr){
		var isDuplicate = false;
		var count = 0;

		for (var i = 0; i < 10; i++){
			if (myCardArray[i] === nr){
				count++;
			}
		}
		if (count === 2){
			isDuplicate = true;
		}
		return isDuplicate;
	}
    function start(){
        for(var iterator = 0; iterator < myNodeList.length; iterator++){

            var el = document.getElementById(myNodeList[iterator].id);
            el.id = iterator;
            //console.log(el);
            el.addEventListener('click', function(){
                animate(this);
            });
            var animate = function (sender){
                sender.style.transform = "rotateY(0deg)";
                console.log("animating");
                console.log(myCardArray[sender.id]);
                sender.style.transform = "rotateY(180deg)";
                sender.classList.add('flipper');
                guess_counter++;
                test_guess(sender);

            };
            randomizeBlocks(iterator);
            //console.log(myCardArray);
        }
        mapCards();
}
function test_guess(card){

        if(guess_counter === 1){
            guessed_cards[0] = myCardArray[card.id];
            prev_card = card;
        }
        else if (guess_counter === 2){

            if(myCardArray[prev_card.id] === myCardArray[card.id]){
                matches++;
                if(matches == 5){
                    window.alert("You finished with " + counter + " guesses!\nReload page to play again!");
                }
                    console.log("A match!");
                    guess_counter = 0;
            }
            else{
                //block_cards(prev_card, card, true);
                console.log("First guess was: " + myCardArray[prev_card.id]);
                console.log("On position " + prev_card.id);
                console.log("Second guess was: " + myCardArray[card.id]);
                console.log("On position " + card.id);
                window.setTimeout(function(){
                    card.style.transform = "rotateY(0deg)";
                    prev_card.style.transform = "rotateY(0deg)";
                    //block_cards(prev_card, card, false);
            }, 1000);
            counter++;
            document.getElementById('guess_counter').innerHTML =  "<b>Guesses: </b>" + counter;
            guess_counter = 0;
            }
        }
}

// function block_cards(prev_card, card, enable){
//         console.log(prev_card.id);
//         console.log(card.id);
//         for(var i = 0; i < myNodeList.length; i++){
//             var el = document.getElementById(i);
//             if (enable){
//                 if (i === parseInt(prev_card.id) || i === parseInt(card.id)){
//                 } else {
//                     console.log("Disabling " + el.id);
//                     el.classList.remove('flipper');
//                 }
//             } else {
//                     el.classList.add('flipper');
//             }
//         }
// }


function mapCards(){
    for(var i = 0; i < myNodeList.length; i++){
        var el = document.getElementById(i);
        switch(myCardArray[i]){
            case 1:
                el.children[1].innerHTML = '<div class="flag" id="sverige"></div>';
                break;
            case 2:
                el.children[1].innerHTML = '<div class="flag" id="japan"> <div id="circle"> </div></div>';
                break;
            case 3:
                el.children[1].innerHTML = '<div class="flag" id="chile">' +
                '<div class="flex-row-container"> <div class="flex-row-item" id="top-row-item">' +
                '<div class="flex-col-container"> <div class="flex-col-item" id="left-col-item">' +
                '<div id="star-five">  </div> </div> <div class="flex-col-item" id="right-col-item">' +
                '</div> </div> </div> <div class="flex-row-item" id="btm-row-item"> </div> </div> </div>';
                break;
            case 4:
                el.children[1].innerHTML =  '<div id="colombia"><div class="flag"> <div class="flex-row-container">'+
                 '<div class="flex-row-item" id="colombia1"> </div> <div class="flex-row-item" id="colombia2"> </div>' +
                 '<div class="flex-row-item" id="colombia3"> </div> </div> </div></div>';
                 break;
            case 5:
                el.children[1].innerHTML = '<div class="flag" id="finland"></div>';
                break;
        }
        console.log(el.children[1].children[0].id);
    }
}

})();
