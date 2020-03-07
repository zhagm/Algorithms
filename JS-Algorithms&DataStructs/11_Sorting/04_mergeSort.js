// checks if array is sorted before splitting up further
// function mergeSort(arr) {
// if (isSorted(arr)) return arr;
// return merge(
//   mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
//   mergeSort(arr.slice(Math.floor(arr.length / 2)))
// );
// }

// classic mergeSort implementation
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i] > arr[i + 1]) return false;
  return true;
}

// helper function that takes two sorted arrays and returns a new array of both merged
// Time complexity: O(m + n)
// Space complexity: O(m + n)
// Pure function
function merge(arr1, arr2) {
  let i = 0,
    j = 0;
  let res = [];
  while (i < arr1.length || j < arr2.length) {
    if (j === arr2.length) {
      while (i < arr1.length) res.push(arr1[i++]);
    } else if (i === arr1.length) {
      while (j < arr2.length) res.push(arr2[j++]);
    } else if (arr1[i] <= arr2[j]) {
      res.push(arr1[i++]);
    } else {
      res.push(arr2[j++]);
    }
  }
  return res;
}

// console.log("merge([1,2,3], [2,3,4]):", merge([1, 2, 3], [2, 3, 4]));
console.log("mergeSort([5, 4, 3, 2, 1]):", mergeSort([5, 4, 3, 2, 1]));
console.log("mergeSort([5, 3, 1, 2, 4]):", mergeSort([5, 3, 1, 2, 4]));
console.log("mergeSort([1, 2, 3, 4, 5]):", mergeSort([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]

/*
Pseudocode:
* 
*/

/*
ABOUT SELECTION SORT:
* Combination of three things - splitting up, sorting, and merging
* Exploits the fact that arrays of length 0 or 1 are sorted
* Works by decomposing an array into smaller arrays of length 0 or 1 and then slowly building up a new sorted array

*/
