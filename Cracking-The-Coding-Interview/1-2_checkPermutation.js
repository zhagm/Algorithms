// Instructions:
// Take input of 2 strs, check if one is a permutation of the other

function checkPermutation(s1, s2) {
  if (s1.length !== s2.length) return false;

  const dict = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    dict[char] = dict[char] ? dict[char] + 1 : 1;
  }

  for (let j = 0; j < s2.length; j++) {
    const char = s2[j];
    if (dict[char]) {
      dict[char]--;
    }
    else return false;
  }

  return true;
}

console.log("checkPermutation('cab', 'abc'):", checkPermutation('cab', 'abc'), '(true)');
// true

console.log("checkPermutation('cab', 'back'):", checkPermutation('cab', 'back'), '(false)');
// false

console.log("checkPermutation('cab', 'car'):", checkPermutation('cab', 'car'), '(false)');
// false


/*
Pseudocode:
// easy first check s1 and s2 lengths should be the same, if not return false
// create dictionary object, loop through s1 and fill dictionary
// with char: count key: value pairs
// loop through s2, if dictionary[char] doesnt exist or is below 0, return false
// else subtract 1 count, if reaches end of function return true
*/
