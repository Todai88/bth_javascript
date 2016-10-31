/**
 * @preserve 35c73530a4a999fee09a70563f3f3bb0
 *
 * 35c73530a4a999fee09a70563f3f3bb0
 * javascript1
 * lab2
 * jobk16
 * 2016-10-27 08:50:50
 * v2.2.21 (2016-10-07)
 *
 * Generated 2016-10-27 10:50:51 by dbwebb lab-utility v2.2.21 (2016-10-07).
 * https://github.com/mosbth/lab
 */

(function(dbwebb){
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 2 - javascript1
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1
 *
 * Create a function called 'sumNumbers()'. The function should take two
 * arguments and return the sum of them. Test the function using the arguments
 * 683 and 626.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function sumNumbers(arg1, arg2){
    return arg1 + arg2;
}




ANSWER = sumNumbers(683, 626);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2
 *
 * Create a function called 'productNumbers()'. The function should take three
 * arguments and return the product of them. Try the function using the
 * numbers 683, 626 and 470.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function productNumbers(arg1, arg2, arg3){
    return arg1 * arg2 * arg3;
}




ANSWER = productNumbers(683, 626, 470);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Create a function 'sumRangeNumbers()' that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values 39 and 89 and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function sumRangeNumbers(min, max){
    var sum = 0;
    for (min; min <= max; min++){
        sum += min;
    }
    return sum;
}




ANSWER = sumRangeNumbers(39, 89);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Create a function 'stringPhrase()' that returns a phrase. Your word is
 * 'grey'. Pass the word as an argument to the function and the returned
 * phrase should be: 'My favorite color is grey.'.
 *
 * Test your function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function stringPhrase(word){
    return "My favorite color is " + word + ".";
}
ANSWER = stringPhrase('grey');

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5
 *
 * Create a function called 'fruitColor()' that takes one argument called
 * 'fruit' and returns the color of the fruit. The function should be aware of
 * the following fruits (banana, apple, kiwi, plum) with respective color
 * (yellow, green, green, red).
 *
 * Try it out using the fruit 'apple' and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function fruitColor(fruit){
    var color = "";
    switch(fruit){
        case 'apple':
            color = "green";
            break;
        case 'banana':
            color = 'yellow';
            break;
        case 'kiwi':
            color = 'green';
            break;
        case 'plum':
            color = 'red';
            break;
        default:
            console.log("unkown color");
            return false;
    }
    return color;
}
ANSWER = fruitColor('apple');

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6
 *
 * Create a function 'printRange()' that takes two arguments 'rangeStart' and
 * 'rangeStop' and returns a string with all numbers comma-separated in the
 * range. Try it using the arguments 29 and 41.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function printRange(min, max){
    var output = "";
    for (min; min <= max; min++){
        if (min == max){
            output += min;
        } else output += min + ",";
    }
    return output;
}


ANSWER = printRange(29, 41);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7
 *
 * Create a function 'printRangeReversed()' that takes two arguments
 * 'rangeStart' and 'rangeStop' and returns a string with all numbers
 * comma-separated in the range. Try it using the arguments 41 and 29.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printRangeReversed(rangeStart, rangeStop){
    var output = "";
    for (rangeStart; rangeStart >= rangeStop; rangeStart--){
        if (rangeStart == rangeStop){
            output += rangeStart;
        } else output += rangeStart + ",";
    }
    return output;
}

ANSWER = printRangeReversed(41, 29);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8
 *
 * Create a function 'printAnyRange()' that takes two arguments 'rangeStart'
 * and 'rangeStop' and returns a string with all numbers comma-separated in
 * the range. If 'rangeStart' is smaller than 'rangeStop' then call the
 * function 'printRange()'.  If 'rangeStart' is greater than 'rangeStop' the
 * call the function 'printRangeReversed()'. Try it using the arguments 29 and
 * 41 (both ways).
 *
 * Answer with the result using arguments 29 and 41.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function printAnyRange(rangeStart, rangeStop){

    if (rangeStart > rangeStop){
        return printRangeReversed(rangeStart, rangeStop);
    } else {
        return printRange(rangeStart, rangeStop);
    }
}

ANSWER = printAnyRange(29, 41);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9
 *
 * Create a function called 'stringRepeat()' that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: 'green' and 7. The number represents the number of times the string
 * should be added to a string.
 *
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function stringRepeat(word, repeat){
    var output = "";
    for (repeat; repeat > 0; repeat--) output+=word;
    return output;
}

ANSWER = stringRepeat('green', 7);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10
 *
 * Create a function called 'calculateInterest()' that returns the money you
 * have after x years of interest, given three arguments: 561, 30 and 5. First
 * argument represents the start money, the second argument represents the
 * number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function calculateInterest(invested, years, interest){
    var sum = invested;
    for (years; years > 0; years--) sum+=(sum * interest/100);
    return parseFloat(sum.toFixed(4));
}
ANSWER = calculateInterest(561, 30, 5);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, false);

/**
 * Exercise 1.11
 *
 * Create a function 'inRange()' that takes three arguments, 'rangeStart',
 * 'rangeStop' and 'value'. The function should return boolean 'true' if
 * 'value' is greater than 'rangeStart' and less than 'rangeStop'. Otherwise
 * it should return boolean 'false'. Try it out using the range 156 - 527 and
 * the value 431.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function inRange(rangeStart, rangeStop, val){
    if (val >= rangeStart && val <= rangeStop){
        return true;
    } else {
        return false;
    }
}

ANSWER = inRange(156, 527, 431);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.11", ANSWER, false);

/**
 * Exercise 1.12
 *
 * Try out the function 'inRange()' using the range 156 - 527 and the value
 * 650.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

ANSWER = inRange(156, 527, 650);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.12", ANSWER, false);

/**
 * Exercise 1.13
 *
 * Create a function called 'degreesToRadians()' that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 *
 * Test your function with the value 203 and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function degreesToRadians(degree){
    return parseFloat((degree * 0.0174533).toFixed(4));
}

ANSWER = degreesToRadians(203);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.13", ANSWER, false);

/**
 * Exercise 1.14
 *
 * Create a function called 'fizzBuzz()' that takes two arguments 'start' and
 * 'stop' and returns a comma-separated string. The arguments represents the
 * starting point and stop point of the game 'Fizz Buzz'
 * (http://en.wikipedia.org/wiki/Fizz_buzz). The function should run from
 * start to stop and add 'Fizz', 'Buzz' or both to your 'result'-variable at
 * appropriate numbers. Each entry to your result should be comma-separated.
 * If 'stop' is equal or lower than 'start', the function should return an
 * appropriate error message.
 *
 * Test the function using start=5 and stop=29.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function checkVal(min, max){
    if(min >= max){
        return false;
    } else {
        return true;
    }
}
function fizzBuzz(start, stop){
    var out = "";
    if (checkVal(start, stop)){
        for(start; start <= stop; start++){
            if (start % 3 === 0 && start % 5 === 0){
                out+= "Fizz Buzz,";
            } else if (start % 3 === 0){
                out += "Fizz,";
            } else if (start % 5 === 0){
                out += "Buzz,";
            } else {
                out += start + ",";
            }


            if (start == stop){
                out = out.slice(0, -1);
            }
        }
} else {
    out = "Error. Invalid start, stop supplied";
}
    return out;
}

ANSWER = fizzBuzz(5, 29);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.14", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Black jack functions
 *
 * In this section, you could re-use your code from lab 1
 *
 */



/**
 * Exercise 2.1
 *
 * Create a function called 'printSum()' that should take two variables, the
 * sum of the players hand and the sum of the dealers hand. Your hand should
 * be three cards with the values: 7, 1 and 10. The dealers hand should be
 * three card with the values: 4, 8, 4. The function should return the sum and
 * the player: 'Player: 18, Dealer: 16'.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 var player = 7 + 1 + 10;
 var dealer = 4 + 8 + 4;

function printSum(pHand, dHand){
    return "Player: " + pHand + ", Dealer: " + dHand;
}



ANSWER = printSum(player, dealer);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Create a function called 'printResult()' that should take two variables,
 * the sum of the players hand and the sum of the dealers hand. Players hand
 * should be three cards with the values: 7, 1 and 10. The dealers hand should
 * be three card with the values: 4, 8, 4. This time you should include the
 * check from lab 1 where you find out the boundaries of the player and the
 * dealer. Player hand = 21 ('black jack'), Player hand less than 21 ('safe'),
 * Player hand larger than 21 ('busted'). Dealer hand less than 17 ('safe'),
 * Dealer hand larger or equal to 17 and less than 21 ('stop'), Dealer hand =
 * 21 ('black jack'), Delaer hand larger than 21 ('busted'). Return a string
 * in the format: 'Player: safe, Dealer: busted'.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 function printResult(playerHand, dealerHand){
     var out = "Player: ";
     if (playerHand == 21){
         out += "black jack";
     } else if (playerHand < 21){
         out += "safe";
     } else if (playerHand > 21){
         out += "busted";
     }
     out += ", Dealer: ";
     if (dealerHand >= 17 && dealerHand < 21){
        out += "stop";
     }
     else if (dealerHand < 17){
         out += "safe";
     }
     else if (dealerHand == 21) {
         out += "black jack";
     } else {
         out += "busted";
     }
     return out;
 }



ANSWER = printResult(player, dealer);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, true);


    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));
