/* Basic JavaScript Practice */

// Directions
// The goal of Basic JavaScript Practice is to ensure you are able to use the JavaScript programming language to solve challenges on your own and are able to use constructs like:
// * Function definitions
// * Mathematical functions
// * Return functions
// * Loops
// * Objects
// * Runtime Complexity

// - Complete each Challenge in a separate repl.it or codepen.io project, and save the links all together in a document so you and your mentor can access them easily later.
// - Before next week begins, weaker concepts should be reviewed, discussed with peers, and if there is still confusion, discuss with your mentor.

// Challenge 1 - Convert Inches to Meters
// Define a function called `metersToInches` that takes an input of the number of meters and outputs the result of the number of inches.
// **Hint:** `1 meter` equals `39.3701` inches.

// O(1)
function metersToInches(meters) {
  return meters * 39.3701;
}

console.log("metersToInches(0): ", metersToInches(0), " should be: 0");
console.log("metersToInches(1): ", metersToInches(1), " should be: 39.3701");
console.log(
  "metersToInches(1.5): ",
  metersToInches(1.5),
  " should be: 59.05515"
);
console.log(
  "metersToInches(15.6): ",
  metersToInches(15.6),
  " should be: 614.17356"
);

// Challenge 2 - Loop `n` Times

// Write a function named `loopThrough` that takes an argument that is a number and loops through and displays a message *“Hello World”* that number of times.

function loopThrough(n) {
  while (n-- > 0) console.log("Hello, World");
}

console.log("loopThrough(0): ", loopThrough(0));
console.log("loopThrough(1): ", loopThrough(1));
console.log("loopThrough(3): ", loopThrough(3));

// ### [Challenge 3] - Number sum

// Define a method called `calculateSum` to calculate the sum all the digits from 0 to an input number.

// O(n)
function calculateSum(n) {
  let sum = 0;
  while (n) sum += n--;
  return sum;
}

console.log("calculateSum(0): ", calculateSum(0), " should be: 0");
console.log("calculateSum(1): ", calculateSum(1), " should be: 1");
console.log("calculateSum(3): ", calculateSum(3), " should be: 6");
console.log("calculateSum(10): ", calculateSum(10), " should be: 55");

// ### [Challenge 4] - FizzBuzz

// Write a function called `fizzbuzz` that prints each number from 1 to the input on a new line.

// * For each multiple of 3, print "Fizz" instead of the number.
// * For each multiple of 5, print "Buzz" instead of the number.
// * For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// O(n)
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

console.log("fizzbuzz(0):", fizzbuzz(0));
console.log("fizzbuzz(16):", fizzbuzz(16));
console.log("fizzbuzz(2):", fizzbuzz(2));

// ### [Challenge 5] Calculate Factorial Number

// A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.

// O(n)
function factorial(n) {
  if (n < 0) return undefined;
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

console.log("factorial(0):", factorial(0));
console.log("factorial(1):", factorial(1));
console.log("factorial(2):", factorial(2));
console.log("factorial(3):", factorial(3));
console.log("factorial(4):", factorial(4));

// ### [Challenge 6] Switch Statements

// Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria:
// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

// O(1)
function sleep_in(weekday, vacation) {
  switch (weekday + "|" + vacation) {
    case "false|true":
    case "false|false":
    case "true|true":
      return true;
      break;
    default:
      return false;
      break;
  }
}

console.log(
  "sleep_in(false, false): ",
  sleep_in(false, false),
  "should be → true"
);

console.log(
  "sleep_in(true, false): ",
  sleep_in(true, false),
  "should be → false"
);

console.log(
  "sleep_in(false, true): ",
  sleep_in(false, true),
  "should be → true"
);

// ### [Challenge 7] Accessing Arrays

// Write a function called common(a, b) with these criteria:
// Given 2 arrays of ints, a and b, return True if they have the same first element *or* they have the same last element. Both arrays will be length 1 or more.

// O(1)
function common(a, b) {
  if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) return true;
  return false;
}

console.log(
  "common([1, 2, 3], [7, 3]): ",
  common([1, 2, 3], [7, 3]),
  "should be → True"
);

console.log(
  "common([1, 2, 3], [7, 3, 2]): ",
  common([1, 2, 3], [7, 3, 2]),
  "should be → False"
);

console.log(
  "common([1, 2, 3], [1, 3]): ",
  common([1, 2, 3], [1, 3]),
  "should be → True"
);

// ### [Challenge 9] Object Keys and Values

// 1.  Create an object with two key-value pairs.
let object = { name: "Z", age: 100 };

// 2.  Log that object to the console.
console.log("object:", object);

// 3.  Delete the first key-value pair in the object.
delete object.name;

// 4.  Log that object to the console again.  The first key-value pair should be gone.
console.log("object:", object);

// ### [Challenge 9] Mutating Objects

// 1. Create an array of objects with at least 2 key value pairs.  The objects should all have the same keys, and the array should contain at least 3 objects.
let animals = [
  {
    commonName: "Panda",
    scientificName: "Ailuropoda melanoleuca",
    type: "Mammal",
    diet: "Omnivore"
  },
  {
    commonName: "Bush Baby",
    scientificName: "Galagidae",
    type: "Mammal",
    diet: "Omnivore"
  },
  {
    commonName: "Green Sea Turtle",
    scientificName: "Chelonia mydas",
    type: "Reptile",
    diet: "Herbivore"
  },
  {
    commonName: "Copperhead",
    scientificName: "Agkistrodon contortrix",
    type: "Reptile",
    diet: "Carnivore"
  }
];

// 2. Create a function that accepts the array of objects as an argument.

// 3. Print the value of the second key in each object to the console.  Use dot-notation to access the values.

// 4. After printing the values in step 3, change the values of the second key in every object to something new.
// O(n)
function printAnimals(animalsArr) {
  for (let animal of animalsArr) {
    console.log(
      `${animal.commonName}'s scientific name is ${animal.scientificName}`
    );
    animal.scientificName = `***${animal.scientificName}***`;
    console.log(animal["scientificName"]);
  }
}

// 5. Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.
printAnimals(animals);

// ### [Challenge 10] Determine Runtime Complexity

// At the top your document for each challenge, state the runtime complexity for that function.

// ### Check for Understanding

// - Demonstrate how to create a function in JavaScript.
// function name(params) {}
// let name = (params) => {}

// - Create 3 examples using Math().

// - How does a function return output?
// with the return keyword

// - Demonstrate how to write a loop.
for (let i = 1; i <= 10; i++) {
  console.log("Counting: ", i);
}
// - Create an example object.
let example = {
  a: "hi",
  b: "hello"
};
