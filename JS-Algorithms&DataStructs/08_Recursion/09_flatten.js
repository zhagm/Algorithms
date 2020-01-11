// Instructions:
// Write a recursive function called flatten which accepts an array of arrays
// and return s a new array with all values flattened.

function flatten(arr) {
  if (!arr.length) return [];
}

console.log("flatten([1, 2, 3, [4, 5] ]):", flatten([1, 2, 3, [4, 5]]));
// [1, 2, 3, 4, 5]

console.log(
  "flatten([1, [2, [3, 4], [[5]]]]):",
  flatten([1, [2, [3, 4], [[5]]]])
);
// [1, 2, 3, 4, 5]

console.log("flatten([[1],[2],[3]]):", flatten([[1], [2], [3]]));
// [1,2,3]

/*
Pseudocode:
//
*/
