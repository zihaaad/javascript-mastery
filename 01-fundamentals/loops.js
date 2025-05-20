// LOOPS => can execute a block of code a number of times. Instead of running same code over and over again. each time with different value we can use loops.

// There are different kinds of loops:
/* 
 - for = loops through a block of code a number of times.
 - for/in = loops through the properties of an object.
 - for/of = loops through values of an iterable object and others iterable data structures such as Arrays, Strings, Maps, Nodelists and more.
 - while = loops through a block of code while a specified condition in true
 - do/while = also loops through a block of code while a specified condition is true
*/

// ======= for loop =========
/*
for (expression 1; expression 2; expression 3) {
     code block to be executed
 }
 
- expression 1 is executed (one time) before the execution of the code block.
- expression 2 defines the condition. Code block will execute till the condtion is true.
- expression 3 is executed (every time) after the code block has been executed.
*/

for (let i = 0; i < 10; i++) {
  console.log("The number is " + i);
}

// exp1 is optional, we can initialize the variable and value before the loop starts.
let i = 1;
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
let length = cars.length;
for (; i < length; i++) {
  text += cars[i] + " ";
}

// we can initiate many values in expression 1 (separated by comma):
for (i = 0, length = cars.length, text = ""; i < length; i++) {
  text += cars[i] + " ";
}

// exp2 is also optional. but we MUST have to break; inside the loop otherwise it will never end. this will crash the browser.

// exp3 is also optional. but need to increase the exp1 value inside the loop.

let val = 1;
for (;;) {
  console.log("val is: ", val);
  val++;
  if (val >= 11) break;
}
