// Array => is a speacial variable or type of data that can hold more than one value:

let car1 = "BMW";
let car2 = "Ferrari";
let car3 = "Tesla";

// Instead of declaring multiple variable for storing cars use array to store multiple values in single variable.

const cars = ["BMW", "Ferrari", "Tesla"];

/* Array has unique index number for each value. starting from 0
    "BMW" index is 0
    "Ferrari" index is 1
    "Tesla" index is 2
 We can get spesific data using index: */

console.log(cars[0]);
// if we are trying to find some value but that is not exist in the array then it will return -1;

// We can modify partcular value using index
cars[2] = "Toyota";

// We can create new array using keyword new - example below:
const numbs = new Array(34, 23, 74, 96);

// Both two way works same way. NO NEED to use new keyword for simplicity use array literal method (1st example)

// We can store mix data type elements in array like array inside array, array of objects, string, number, boolean everything:
const mixArr = [
  "Zihad",
  21,
  {
    cars: [
      {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
      {name: "BMW", models: ["320", "X3", "X5"]},
    ],
  },
  null,
  undefined,
];
