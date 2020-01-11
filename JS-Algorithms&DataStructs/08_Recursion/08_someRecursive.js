// Instructions:
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

function someRecursive(arr, cb) {
  if (!arr.length) return false;
  return cb(arr[0]) || someRecursive(arr.slice(1), cb);
}

const isOdd = val => val % 2 !== 0;

console.log(
  "someRecursive([1,2,3,4], isOdd):",
  someRecursive([1, 2, 3, 4], isOdd)
);
// true

console.log(
  "someRecursive([4,6,8,9], isOdd):",
  someRecursive([4, 6, 8, 9], isOdd)
);
// true

console.log("someRecursive([4,6,8], isOdd):", someRecursive([4, 6, 8], isOdd));
// false

console.log(
  "someRecursive([4,6,8], val => val > 10):",
  someRecursive([4, 6, 8], isOdd)
);
// false

/*
Pseudocode:
//
*/
