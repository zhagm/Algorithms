// Instructions:
// Write a recursive function called isPalindrome which returns true if the string passed
// to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
  if (str.length <= 1) return true;
  return (
    str[0].toLowerCase() === str.slice(-1).toLowerCase() &&
    isPalindrome(str.slice(1, -1))
  );
}

console.log("isPalindrome('asdfdsa'):", isPalindrome("asdfdsa"));
// true

console.log("isPalindrome('asdsfdsa'):", isPalindrome("asdsfdsa"));
// false

/*
Pseudocode:
// base case is str length is 1 or 0 (depending on odd or even)
// checking whether first and last char are the same (case sensitive?)
// return true if all recursive calls return true
*/
