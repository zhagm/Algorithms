// Instructions:
// Write a function called factorial  which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it.

function factorial(n) {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}

console.log("factorial(7):", factorial(7));
// 5040

/*
Pseudocode:
// base case is that n is less than 1, we can't multiply by 0
// logic is we multiply current number by factorial called with n - 1 (decrementing)
*/
