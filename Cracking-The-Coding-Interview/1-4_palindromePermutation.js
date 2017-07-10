// Instructions:
// Given a string, write a function to check if it is a perumation of a palindrome.
// (Palindrome - word that's the same backwards and forwards)
// (Permutation - rearrangement of letters)

function palindromePermutation(str) {
  str = str.toLowerCase();
  let single = 0;
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if ((/\w/).test(c)) {
      obj[c] = (obj[c] ? obj[c] + 1 : 1);
    }
  }
  for (let key in obj) {
    if (obj[key]%2 === 1) {
      single++;
    }
    if (single > 1) return false;
  }
  return true;
}


console.log("palindromePermutation('Tact Coa'):", palindromePermutation('Tact Coa'));
// true

console.log("palindromePermutation('aabbc'):", palindromePermutation('aabbc'));
// true

console.log("palindromePermutation('hello'):", palindromePermutation('hello'));
// false

/*
Pseudocode:
// make dictionary, loop through str and fill dictionary with char: charCount pairs
// loop through object and check that either there's 2 of everything or
// two of everything and one of one char
*/
