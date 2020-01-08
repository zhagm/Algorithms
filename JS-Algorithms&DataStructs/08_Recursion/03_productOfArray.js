// Instructions:
// Write a function calle productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (!arr.length) return 1;
  return arr.pop() * productOfArray(arr);
}

console.log("productOfArray([1, 2, 3, 10]):", productOfArray([1, 2, 3, 10]));
// 60

/*
Pseudocode:
// base case is if the array is empty, in which case we can return 1
// use array.pop() to take last element, multiply by result of productOfArray without the last item
*/
