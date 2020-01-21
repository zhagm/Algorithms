// Instructions:
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.

function collectStrings(x) {
  if (typeof x === "string") return [x];
  let res = [];
  if (typeof x === "object")
    for (let key in x) res = [...res, ...collectStrings(x[key])];
  return res;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj));
// ["foo", "bar", "baz"])
