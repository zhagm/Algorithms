function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j + 1] < arr[j]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("insertionSort([5, 4, 3, 2, 1]):", insertionSort([5, 4, 3, 2, 1]));
console.log("insertionSort([5, 3, 1, 2, 4]):", insertionSort([5, 3, 1, 2, 4]));
console.log("insertionSort([1, 2, 3, 4, 5]):", insertionSort([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]

/*
Pseudocode:
* 
*/

/*
ABOUT SELECTION SORT:
* Start with the second item in the array and build up a sorted section of the array (from beginning)
* For each following item, check if it's in the right place and if not insert it into the correct place of the sorted part of the array
*/
