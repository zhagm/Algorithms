"use strict";
// to allow use of let/const instead of var (ES6)

// Instructions:
// Given a string, write a function to check if it is a perumation of a palindrome.
// (Palindrome - word that's the same backwards and forwards)
// (Permutation - rearrangement of letters)

function palindromePermutation(str) {
  return str;
}


console.log("palindromePermutation('Tact Coa'):", palindromePermutation('Tact Coa'));
// true

/*
Pseudocode:
// make dictionary, loop through str and fill dictionary with char: charCount pairs
// loop through object and check that either there's 2 of everything or
// two of everything and one of one char
*/
