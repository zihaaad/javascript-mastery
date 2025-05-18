// 1. VARIABLES -> variables are used to store data.In javascript we can declare values in 4 ways:
//  (i) Automatically
//  (ii) Using var
//  (iii) Using let
//  (iv) Using const

// (i) Automatically = not best practice. always declare a variable.
x = 5;
y = 10;
z = x + y;

//  (ii) Using var = the keyword was used in all javascript code from 1995 to 2015. Only use if you must support older browsers
var firstname = "Zihadul";
var lastname = "Islam";
var fullname = firstname + " " + lastname;

//  (iii) Using let = `let` and `const` both keywords was added to modern javascript in 2015. Use let if value will be changed
let fullname = "Zihadul Islam";
let age = 20;
let isMarried = false;

//  (iii) Using const = Always use `const` if the value should not be changed
const email = "codewithzihad@gmail.com";
const country = "Bangladesh";
