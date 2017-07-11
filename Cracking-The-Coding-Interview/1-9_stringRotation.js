// Instructions:
// Given 2 strings, check if s1 is a rotation of s2

function stringRotation(s1, s2) {
  return false;
}

console.log("stringRotation('hello, ehllo'):", stringRotation('hello, ehllo'));
// false

console.log("stringRotation('waterbottle, erbottlewat'):", stringRotation('waterbottle, erbottlewat'));
// true

/*
Pseudocode:
// if strs not same length, return false
// loop through one string, using substr and concat to create rotations each time
// compare to other string, if same, return true
// if the end of the function is reached, return false
*/
