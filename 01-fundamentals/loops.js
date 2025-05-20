// LOOPS => can execute a block of code a number of times. Instead of running same code over and over again. each time with different value we can use loops.

// There are different kinds of loops:
/* 
 - for = loops through a block of code a number of times.
 - for...in = loops through the properties of an object.
 - for...of = loops through the values of an iterable object, such as Arrays, Strings, Maps, Sets, NodeLists, and other iterable data structures.
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
  //   console.log("The number is " + i);
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
  //   console.log("val is: ", val);
  val++;
  if (val >= 11) break;
}

// ====== for in loop ======
/* for (key in object) {
     code block to be executed
 } */

const person = {fname: "Zihad", lname: "Islam", age: 21};
let personTxt = "";

for (let x in person) {
  personTxt += person[x] + " ";
}

/* 
for in can also iterate array but do not use for in over array if the index order is imporant. Instead use for, for of or array.forEarch() when the order is important. 

for (variable in array) {
     code block to be executed
 } */

const nums = [24, 54, 56, 78];
let numTxt = " ";
for (let x in nums) {
  numTxt += nums[x];
}

// ======== for of ==========

/* 
for (variable of iterable) {
    // code block to be executed
 }
*/

let carTxt = "";
for (let x of cars) {
  carTxt += x;
}

let language = "JavaScript";
let langTxt = " ";

for (let x of language) {
  langTxt += x + " ";
}

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
for (let [key, value] of map) {
  //   console.log(key, value);
}

// ===== while and do...while loop =====

/* // while loop can execute a block of code as long as a specified condition is true 

while (condition) {
  // code block to be executed
} 
  */

let txt2 = "";
let i2 = 1;
while (i2 <= 10) {
  txt2 += "The number is " + i2 + "\n";
  i2++;
}

/* // The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

 do {
    // code block to be executed
  } 
 while (condition) */

let txt3 = " ";
let i3 = 1;
do {
  txt3 += "The number is " + i3 + "\n";
  i3++;
} while (i3 <= 10);

let i4 = 0;
let carTxt2 = "";
while (cars[i4]) {
  carTxt2 += cars[i4] + "\n";
  i4++;
}
