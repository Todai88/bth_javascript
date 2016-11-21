/**
 * @preserve ba2c467de24d26fe13492ea36648c97e
 *
 * ba2c467de24d26fe13492ea36648c97e
 * javascript1
 * lab1
 * jobk16
 * 2016-10-19 15:17:01
 * v2.2.21 (2016-10-07)
 *
 * Generated 2016-10-19 17:17:01 by dbwebb lab-utility v2.2.21 (2016-10-07).
 * https://github.com/mosbth/lab
 */

(function(dbwebb){
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - javascript1
 *
 * If you need to peek at examples or just want to know more, take a look at
 * the references at MDNs (Mozilla Developers Network) page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference.
 *
 * Here you will find everything this lab will go through and much more.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Integers, floats and variables
 *
 * The foundation of variables, numbers, strings and basic arithmetic. In
 * questions 1.5 and 1.6 you are going to work with floats. One way to round a
 * float to a certain amount of decimals is:  Math.round(val*10000)/10000,
 * where 'val' is your float number.
 *
 */



/**
 * Exercise 1.1
 *
 * Create a variable called 'numberOne' and give it the value 376. Create
 * another variable called 'numberTwo' and give it the value 762. Create a
 * third variable called 'result' and assign to it the sum of the first two
 * variables.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var numberOne = 376;
var numberTwo = 762;
var result = numberOne + numberTwo;



ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2
 *
 * Use your two variables, 'numberOne' and 'numberTwo'. Create one more,
 * called 'numberThree' and give it the value: 923. Use your variable 'result'
 * and assign to it the sum of all three variables.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var numberThree = 923;

result += numberThree;
ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Use your variables 'numberOne' and 'numberTwo' and answer with the product
 * of the numbers in your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = numberOne * numberTwo;




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Use your variables 'numberOne', 'numberTwo' and 'numberThree'. Subtract
 * 'numberThree' from the product of the other two variables.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = result - numberThree;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5
 *
 * Create two variables, 'floatOne' and 'floatTwo'. Give them the values:
 * 741.86 and 610.57. Use your 'result'-variable and assign to it the sum of
 * the float numbers.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var floatOne = 741.86;
var floatTwo = 610.57;

result = floatOne + floatTwo;

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6
 *
 * Answer with the result of 128 modulus (%) 56.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



ANSWER = 128 % 56;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Built-in Number-methods and functions
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Number
 *
 */



/**
 * Exercise 2.1
 *
 * Create a variable 'someIntText' and give it a value of '803.762 horse'. Use
 * the function 'parseInt' to find out the integer representation of the text.
 *
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var someIntText = '803.762 horse';



ANSWER = parseInt(someIntText);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Use your variable 'someIntText'. Use the function 'parseFloat' to find out
 * the float representation of the text.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = parseFloat(someIntText);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Built-in Math-methods and functions
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Math
 *
 */



/**
 * Exercise 3.1
 *
 * Use the method 'max', in Math, to find out the highest number in the serie:
 * 875,587,665,460.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */





ANSWER = Math.max(875, 587, 665, 460);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2
 *
 * Use the method 'min', in Math, to find out the lowest number in the serie:
 * 875,587,665,460.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = Math.min(875,587,665,460);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3
 *
 * Use the method 'round', in Math, to round the float number: 157.23 to the
 * closest integer.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = Math.round(157.23);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/**
 * Exercise 3.4
 *
 * Find out the quotient of 560 / 87 and use the method 'floor', in Math, to
 * get only the integer value.
 *
 * Use your 'result'-variable in your answer.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


ANSWER = Math.floor(560 / 87);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.4", ANSWER, false);

/**
 * Exercise 3.5
 *
 * Use the Math property 'E' to get the float value of 'E'. Find the product
 * of 'E' and 34. Use the built-in method 'ceil()' to get an integer value of
 * your result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = Math.ceil(Math.E * 34);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.5", ANSWER, false);

/**
 * Exercise 3.6
 *
 * Use the Math property 'PI' to get the float value of 'Pi'. Round the result
 * to 4 decimals.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = parseFloat(Math.PI.toFixed(4));

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.6", ANSWER, false);

/**
 * Exercise 3.7
 *
 * Use the method 'pow', in Math, to find the power of (base) 87 and
 * (exponent) 5.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = Math.pow(87, 5);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.7", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . Strings and variables
 *
 * Practice strings and variables. If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/String
 *
 */



/**
 * Exercise 4.1
 *
 * Create a variable, named 'firstWord', that holds the word 'JavaScript'.
 * Create a second variable, named 'secondWord', that holds the word 'rocks!'.
 * Create a third variable, named 'bothWords', and put together 'firstWord'
 * and 'secondWord' with a space between.
 *
 * Answer with the variable 'bothWords'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var firstWord = 'JavaScript';
var secondWord = 'rocks!';
var bothWords = firstWord + " " + secondWord;



ANSWER = bothWords;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);

/**
 * Exercise 4.2
 *
 * Create a variable called 'wordOne' and assign to it: 'werewolf'. Add the
 * number 924 to the word and answer with the result in your
 * 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var wordOne = "werewolf";


ANSWER = wordOne + 924;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 5 . Built-in String-methods, functions and properties
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/String
 *
 */



/**
 * Exercise 5.1
 *
 * Use 'charAt' on a string to return the character at a given index. Use it
 * on the word 'werewolf' and answer with the character at index 0.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



ANSWER = wordOne.charAt(0);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.1", ANSWER, false);

/**
 * Exercise 5.2
 *
 * Use 'toUpperCase' to transform the string: 'I do not know, I mostly just
 * hurt people.' to uppercase.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = "I do not know, I mostly just hurt people.".toUpperCase();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.2", ANSWER, false);

/**
 * Exercise 5.3
 *
 * Use 'length' to find out the length of the string: 'werewolf'.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = wordOne.length;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.3", ANSWER, false);

/**
 * Exercise 5.4
 *
 * Use 'substr' to extract the last three characters of the word: 'werewolf'.
 *
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = wordOne.substr(wordOne.length -3);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 6 . Built-in Date-methods and functions
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Date
 *
 */



/**
 * Exercise 6.1
 *
 * Create a Date object called 'myDate' and initiate it with: 'Aug 12, 1985'.
 * Use the built-in function Date.getFullYear to get the year from your Date
 * object.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var myDate = new Date('Aug 12, 1985');

ANSWER = myDate.getFullYear();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("6.1", ANSWER, false);

/**
 * Exercise 6.2
 *
 * Create a new Date object that is equal to 'myDate' plus 30 days.
 *
 * Use Date.getDate and answer with the day of the month.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myNewDate = myDate;
myNewDate.setDate(myNewDate.getDate() + 30);
ANSWER = myNewDate.getDate();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("6.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 7 . If, else if and else
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/if...else
 *
 */



/**
 * Exercise 7.1
 *
 * Create five variables: 'card1'=8, 'card2'=1, 'card3'=4, 'card4'=8,
 * 'card5'=7.
 *
 * Add them up and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var card1 = 8, card2 = 1, card3 = 4, card4 = 8, card5 = 7;



ANSWER = card1 + card2 + card3 + card4 + card5;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.1", ANSWER, false);

/**
 * Exercise 7.2
 *
 * Use an if statement to see if the five cards (card1-card5) have a combined
 * value that is higher than 21.
 *
 * If the value is higher, answer with the string 'busted'. Else answer with
 * the string 'safe'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */





ANSWER = ((card1 + card2 + card3 + card4 + card5 > 21)  ? "busted" : "safe");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.2", ANSWER, false);

/**
 * Exercise 7.3
 *
 * Use if else statements to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with lower = 'safe', higher = 'busted', 21 = 'black jack'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = (card1 + card2 + card3 == 21) ? "black jack" : (card1 + card2 + card3 < 21) ? "safe" : "busted" ;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.3", ANSWER, false);

/**
 * Exercise 7.4
 *
 * Create three variables: 'dealer1' = 8, 'dealer2' = 4 and 'dealer3' = 3.
 * Combine the if, else and the AND (&&) statements to see what the dealer
 * should do.
 *
 * If the combined value of the dealercards is lower than 17, answer with
 * 'safe', if the value is higher than or equal to 17 and lower than 21 answer
 * 'stop'. If the value is 21 answer 'black jack'. If the value is higher than
 * 21 answer 'busted'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var dealer1 = 8, dealer2 = 4, dealer3 = 3;
var comb = dealer1 + dealer2 + dealer3;
var out = "";
if (comb < 17){
    out = "safe";
} else if (comb >= 17 && comb < 21){
    out = "stop";
} else if (comb == 21) {
    out = "black jack";
} else {
    out = "busted";
}
ANSWER = out;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 8 . Switch, case
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/switch
 *
 */



/**
 * Exercise 8.1
 *
 * Use a switch-case statement to figure out the color of a fruit. You have
 * the following fruits - banana=yellow, apple=green, kiwi=green,
 * plum=purple). Create a variable 'myFruit' which holds the current value of
 * your fruit. If 'myFruit' is banana, the result should be 'The banana is
 * yellow.'.
 *
 * Answer with the result where 'myFruit = kiwi'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myFruit = "kiwi";

switch(myFruit) {
    case "banana":
        out = "The banana is yellow.";
        break;
    case "apple":
        out = "The aple is green.";
        break;
    case "kiwi":
        out = "The kiwi is green.";
        break;
    case "plum":
        out = "The plum is purple.";
        break;
    default:
        out = "This is an unkown fruit.";
            }

ANSWER = out;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("8.1", ANSWER, false);

/**
 * Exercise 8.2
 *
 * Extend your switch-case statement with a default value. The result should
 * be 'That is an unknown fruit.' when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
myFruit = "pear";
 switch(myFruit) {
     case "banana":
         out = "The banana is yellow.";
         break;
     case "apple":
         out = "The aple is green.";
         break;
     case "kiwi":
         out = "The kiwi is green.";
         break;
     case "plum":
         out = "The plum is purple.";
         break;
     default:
         out = "That is an unknown fruit.";
             }




ANSWER = out;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("8.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 9 . For loops
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/for
 *
 */



/**
 * Exercise 9.1
 *
 * Use a for-loop to increment 863 with the value 4, 17 times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var number = 863;

for (var i = 0; i < 17; i++){
    number += 4;
}


ANSWER = number;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("9.1", ANSWER, false);

/**
 * Exercise 9.2
 *
 * Use a for-loop to decrement 735 with the value 4, 12 times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 number = 735;

 for (i = 0; i < 12; i++){
     number -= 4;
 }

ANSWER = number;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("9.2", ANSWER, false);

/**
 * Exercise 9.3
 *
 * Use a for-loop to add all the values in the range - 25 to 47 - to a string
 * with each number separated by a comma ','. The result should not end with a
 * comma. You should neither have a space after the comma.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myString = "";

for (i = 25; i <= 47; i++){
    myString +=(i == 47) ? i : i +",";
}


ANSWER = myString;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("9.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 10 . While loops
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/while
 *
 */



/**
 * Exercise 10.1
 *
 * Use a while-loop to increment 17 with the value 4 until it has reached or
 * passed 863.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
out = 17;
var count = 0;
while (out <= 863){
    out += 4;
    count++;
}




ANSWER = count;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("10.1", ANSWER, false);

/**
 * Exercise 10.2
 *
 * Use a while-loop to subtract 4 from 735 until the value has reached or
 * passed 0.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 out = 735;
 count = 0;
 while (out >= 0){
     out -= 4;
     count++;
 }




ANSWER = count;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("10.2", ANSWER, false);


    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));
