// Instructions:
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let curr = arr.shift();
  curr = curr[0].toUpperCase() + curr.slice(1);
  return [curr, ...capitalizeFirst(arr)];
}

console.log(
  "capitalizeFirst(['hello', 'how', 'are', 'you']):",
  capitalizeFirst(["hello", "how", "are", "you"])
);
// answer

/*
Pseudocode:
//
*/
