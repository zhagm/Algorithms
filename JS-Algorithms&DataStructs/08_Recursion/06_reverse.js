// Instructions:
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (str.length <= 1) return str;
  return str.slice(-1) + reverse(str.slice(0, str.length - 1));
}

console.log("reverse('hello'):", reverse("hello"));
// olleh

/*
Pseudocode:
// base case - str is length <= 1, return str
// logic - get last character of string + reverse(remainder of string)
*/
