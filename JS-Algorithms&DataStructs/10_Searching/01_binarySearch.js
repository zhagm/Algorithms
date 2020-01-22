let binarySearch = (sortedArr, val) => {
  let start = 0;
  let end = sortedArr.length - 1;
  do {
    let i = Math.floor((end - start) / 2) + start;
    if (sortedArr[i] === val) return i;
    else if (sortedArr[i] > val) end = i;
    else if (sortedArr[i] < val) start = i;
    if (end - start <= 1) {
      if (sortedArr[start] === val) return start;
      else if (sortedArr[end] === val) return end;
      return -1;
    }
  } while (start !== end);
  return -1;
};

let testArr = [1, 2, 4, 5, 7];
console.log("binarySearch(testArr, 5):", binarySearch(testArr, 5));
// 3

console.log("binarySearch(testArr, 3):", binarySearch(testArr, 3));
// -1

console.log("last item:", binarySearch(testArr, 7));
// 4

console.log("first item:", binarySearch(testArr, 1));
// 0
