// FUNCTION => block of code designed to perform a particular task. only executes when something invokes it or calls it. use function when need to reuse a code block with different input and get different result.

/* 
// function declaration

function funcName(parameters) {
    // code to be executed
    // return result; 
}

// declared functions are not executed immediately. They are 'saved for later use'. executes when they are invoked (called upon).

funcName(arguments) 

// invoke function with arguments that will be recieved in  function params.
// params and arguments are optional. if need to pass different input and get different result each time then it's use it.
*/

function dateToday() {
  return new Date().toLocaleDateString();
  // after return no code will work. It's simply end the function execution and return the result.
}

dateToday();
console.log(dateToday());
console.log(dateToday());

// as function is reusable we can call it as much time we want wihtout writing same code again and again.
// Usually we see the returned result in user interface using HTML. but as we don't have we can invoke the function inside console.log() function it will print the result.

function sum(a, b) {
  return a + b;
}

sum(5, 10);
sum(10, 15);
sum(30, 40);

// see how useful it seems!! think about a big logic that we have to reuse with different inputs...

// ==== Function expression =====

const greet = function (name) {
  return `Hi ${name}`;
};

// simply declaring a function in a variable. cannot invoke a function expression before it's defined. as it is not hoisted

// ==== Arrow function expression (ES6) =====
// a modern way of writing function expression introduced in ES6 (2015 version of JavaScript)

const multiply = (a, b) => a * b;
// the logic that can be written in one line don't need to take {}. it will return auto. if there is more logics then:

const multiply2 = (a, b) => {
  // write logics here and return the result endly.
  return a * b;
};

// We will learn about advanced functions later.
