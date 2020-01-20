// Instructions:
// Write a function called stringifyNumbers which takes an object and finds all of the values which are numbers and converts them to strings.

function stringifyNumbers(x) {
  if (typeof x === "number") return JSON.stringify(x);
  if (typeof x === "object" && !Array.isArray(x)) {
    let newObj = {};
    for (let key in x) newObj[key] = stringifyNumbers(x[key]);
    return newObj;
  }
  return x;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(typeof obj.data.val);
// starts off "number"
obj = stringifyNumbers(obj);
console.log(typeof obj.data.val);
// Should be "string"

/*
{
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
}
*/
