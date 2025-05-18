// 2. DATA TYPES => javascript can store any kind of data. data types are important concepts of any programming language. In javascript we cannot tell the variable explicitly which kind of data the variable will store. There is TypeScript - type exteneded version of javascript. Javascript has 8 Datatypes:
/* 
    1. String
    2. Number
    3. BigInt
    4. Boolean
    5. Undefined
    6. Null
    7. Object
    8. Symbol
*/

// Strings
let phone = "iPhone 8 Plus";
let color = "Red";

// Numbers
let zipCode = 7860;
let age = 20;

// Booleans
let isMarried = false;
let isAlive = true;

// Object
const person = {
  firstName: "Zihadul",
  lastName: "Islam",
};

// Array Object
const friends = ["Adnan", "Rohan", "Ayon", "Porosh"];

// Date Object
const date = new Date("2025-05-18");

// BigInt = numbers that exceed 15-17 digits javascript begin to lose precision. then you have to use BigInt function explicitly.
let bigNums = BigInt(1234567890123456789); // BigInt type
let nums = 123456789012345; // number type
