let binarySearch = (sortedArr, val) => {
  let start = 0,
    end = sortedArr.length - 1;
  do {
    let mid = Math.floor((end - start) / 2) + start;
    if (sortedArr[mid] === val) return mid;
    else if (sortedArr[mid] > val) end = mid - 1;
    else start = mid + 1;
  } while (start < end);
  return -1;
};

// function binarySearch(arr, n) {
//   let start = 0,
//     end = arr.length - 1;
//   let mid = Math.floor((start + end) / 2);
//   while (arr[mid] !== n && start <= end) {
//     if (arr[mid] > n) end = mid - 1;
//     else if (arr[mid] < n) start = mid + 1;
//     mid = Math.floor((start + end) / 2);
//   }
//   return arr[mid] === n ? mid : -1;
// }

let testArr = [1, 2, 4, 5, 7];
console.log("binarySearch(testArr, 5):", binarySearch(testArr, 5));
// 3

console.log("binarySearch(testArr, 3):", binarySearch(testArr, 3));
// -1

console.log("last item:", binarySearch(testArr, 7));
// 4

console.log("first item:", binarySearch(testArr, 1));
// 0
