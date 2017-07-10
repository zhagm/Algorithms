// Instructions:
// Take a string, replace all spaces with %20 unless front or back of str

function urlify(str) {
  while (str[0] === ' ') {
    str = str.substr(1);
  }
  while (str[str.length-1] === ' ') {
    str = str.substr(0, str.length - 1);
  }
  return str.replace(/\s+/g, '%20');
}

console.log("urlify('one two three'):", urlify('one two three'));
// one%20two%20three

console.log("urlify('   one    two  three    '):", urlify('   one    two  three    '));
// one%20two%20three


/*
Pseudocode:
// check the beginning of the string for spaces with a while loop (remove spaces)
// check the back of the string for spaces with a while loop
// use regex and the string replace method
// to replace one or more consecutive spaces with single %20
*/
