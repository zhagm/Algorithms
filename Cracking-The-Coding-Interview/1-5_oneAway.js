"use strict";
// to allow use of let/const instead of var (ES6)

// Instructions:
// There are three types of edits that can be performed on strings: insert a
// character, remove a character, or replace a character. Given two strings,
// write a function to check if they are one edit (or zero edits) away.

const oneAway = (str1, str2) => {
  if (str1 === str2) return true;
  else if (str1.length === str2.length) {
    let diffCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) diffCount++;
    }
    return (diffCount === 1);
  }
  else if (Math.abs(str1.length - str2.length) === 1) {
    let long = str1.length > str2.length ? str1 : str2;
    let short = str1.length < str2.length ? str1 : str2;

    for (let i = 0; i < long.length; i++) {
      if (long[i] !== short[i]) {
        short = short.substr(0, i) + long[i] + short.substr(i);
        return (short === long);
      }
    }
  }
  else {
    return false;
  }
}

console.log(oneAway('ple', 'pale'));
// true

console.log(oneAway('pales', 'pale'));
// true

console.log(oneAway('pale', 'bale'));
// true

console.log(oneAway('pale', 'bake'));
// false


/*
Pseudocode:
// First check if they are the same string to save trouble
// If they are the same length, loop through and count differences
// If differences are 1 count, return true, else false
// If they're one away from each other in length, loop through, knowing longer
// and shorter one, and try taking out one char at a time to see if they match
*/
