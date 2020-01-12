// Instructions:
// Write a recursive function called flatten which accepts an array of arrays
// and return s a new array with all values flattened.

function flatten(arr) {
  let res = [];
  if (!arr.length) return res;
  return arr.reduce((res, val) => {
    if (Array.isArray(val)) res.push(...flatten(val));
    else res.push(val);
    return res;
  }, []);
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
