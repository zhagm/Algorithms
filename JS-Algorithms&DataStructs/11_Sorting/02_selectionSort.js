// Instructions:
// ...

function selectionSort(arr) {
  let smallestIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) smallestIndex = j;
    }
    if (smallestIndex !== i) {
      let hold = arr[i];
      arr[i] = arr[smallestIndex];
      arr[smallestIndex] = hold;
    }
  }
  return arr;
}

console.log("selectionSort([5, 4, 3, 2, 1]):", selectionSort([5, 4, 3, 2, 1]));
console.log("selectionSort([5, 3, 1, 2, 4]):", selectionSort([5, 3, 1, 2, 4]));
console.log("selectionSort([1, 2, 3, 4, 5]):", selectionSort([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]

/*
Pseudocode:
* loop through length of array - 1
* save smallest val's index, loop through adn replace value if new index is smaller
* swap indexes of i and smalles val index
* loop till the end then return
*/

/*
ABOUT SELECTION SORT:
* Loop through each item in the array and at each one, loop to find smallest item and swapping with current item if smaller
* O(n^2)
*/
