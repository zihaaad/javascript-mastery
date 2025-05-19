// CONDITIONALS => statements are used to perform different actions based on different conditions.

/*
In JavaScript we have the following conditional statements:
 - Use `if` to specify a block of code to be executed, if a specified condition is true
 - use `else` to specify a block of code to be executed, if the same condition is false
 - use `else if` to specify a new condition to test, if the previous condition is false
 - use `switch` to speicy many alternative blocks of code to be executed
*/

// if, else, else if - conditional statements

/*  
if (conditon) {
  // executes if condition is true
} else if (conditon2) {
  // executes if condition2 is true
} else {
  // executes if the prev condition are false
}  */

let time = 15;
let greeting;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// switch statements to select on of many code blocks to be executed
/*
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
} */

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
