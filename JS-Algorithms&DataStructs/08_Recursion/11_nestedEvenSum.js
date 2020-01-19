// Instructions:
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(x) {
  if (typeof x === "number") return x % 2 ? 0 : x;
  if (typeof x !== "object" || Array.isArray(x)) return 0;
  return Object.keys(x).reduce((sum, key) => {
    return sum + nestedEvenSum(x[key]);
  }, 0);
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
};

console.log("nestedEvenSum(obj1):", nestedEvenSum(obj1));
// 6

console.log("nestedEvenSum(obj2):", nestedEvenSum(obj2));
// 10
