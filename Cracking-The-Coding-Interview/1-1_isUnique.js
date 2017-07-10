// Instructions:
// Take input of string, check if all characters are unique
// If unique, return true, else return false

function isUnique(str) {
  str = str.toLowerCase();
  for ( let i = 0; i < str.length - 1; i++ ) {
    for ( let j = i + 1; j < str.length; j++ ) {
      if (str[i] === str[j])
        return false
    }
  }
  return true;
}

console.log("isUnique('hello'):", isUnique('hello'));
// false

console.log("isUnique('alright'):", isUnique('alright'));
// true

/*
Pseudocode:
// look at one letter at a time with a for loop
// check if chars after current char match current char
// if matches, return false, else don't do anything
// if reaches end of loops, return true
*/
