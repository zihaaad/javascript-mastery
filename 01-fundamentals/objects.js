// OBJECT => is a collection of key-value pairs. object is one of the most crucial part of javascript programming language. think of it like real-life object.

/* 
const name = "Zihad"
let age = 20;
isStudent: true;

Instead of declaring variable to store each attributes. we can store all information in a object. 
*/

// person object
const person = {
  name: "Zihad",
  age: 20,
  isStudent: true,
  location: {
    country: "Bangladesh",
    city: "Dhaka",
  },
  isMarried: false,
  friends: ["Adnan", "Rohan", "Ayon"],
};

const car = {
  name: "Toyota",
  model: "Toyota 111",
  version: 2003,
  isAuto: false,
};

// so we can store all kind / types of data in key-value pair.

// Accessing Values
console.log(person.name); // dot notation
console.log(person.location.country); // dot notation
console.log(car["isAuto"]); // bracket notation

// Modifying Object Properties
person.age = 21;
car["isAuto"] = true;

// Object Methods => which object contain function, called methods
const dog = {
  name: "Rex",
  //   bark: function () {
  //     console.log("woof!");
  //   },
  bark() {
    console.log("woof!");
  }, // shortcut syntex in modern javascript
};

dog.bark();

// object  loop
for (let key of person) {
  console.log(key);
}
