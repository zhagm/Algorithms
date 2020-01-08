// Instructions:
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow() -
// do not worry about negative bases and exponents.

function pow(base, exp) {
  if (exp === 1) return base;
  else if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log("pow(2, 4):", pow(2, 4));
// 16

/*
Pseudocode:
// -
*/
