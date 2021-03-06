function bubbleSort(arr) {
  let swapCount;
  do {
    swapCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + 1;
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swapCount++;
      }
    }
  } while (swapCount !== 0);
  return arr;
}

console.log("bubbleSort([5, 4, 3, 2, 1]):", bubbleSort([5, 4, 3, 2, 1]));
console.log("bubbleSort([5, 3, 1, 2, 4]):", bubbleSort([5, 3, 1, 2, 4]));
console.log("bubbleSort([1, 2, 3, 4, 5]):", bubbleSort([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]

/*
Pseudocode:
* set counter at array length
* loop through, while (counter is not equal to array length)
* everytime a swap occurs, decrement counter
* compare index 0 and index 1, swap if 0 is bigger
*/

/*
ABOUT BUBBLE SORT:
* Sort where largest values bubble to the end - comparing two items at a time and moving larger one to the left until the whole thing is sorted
* COMPLEXITY: O(n^2) - worst case
* Best to use for data that's almost fully sorted
* Good for really small data sets
* Good for practicing sorting as implementation and conceptualization is easy
* Simple and readable code
*/
