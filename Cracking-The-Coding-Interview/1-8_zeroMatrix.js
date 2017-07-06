"use strict";
// to allow use of let instead of var (ES6)

// Instructions:
// If an element in the MxM is 0, the entire row and column become 0's

function zeroMatrix(m) {
  if (!Array.isArray(m)) return null;
  const row = [], col = [];
  for (let x = 0; x < m.length; x++) {
    for (let y = 0; y < m[0].length; y++) {
      if (m[x][y] === 0) {
        if (row.indexOf(x) === -1) row.push(x);
      }
    }
  }
  for (let x = 0; x < m.length; x++) {
    for (let y = 0; y < m[0].length; y++) {

    }
  }
  console.log(row);
  return m;
}

console.log("zeroMatrix('test'):", zeroMatrix([[1,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,1]]));
// answer

/*
Pseudocode:
// create row and col arrays
// loop through and find all the zeros
// push their m[x][y] x values into row, y values into col
// loop through again and check if each element's x is in row || y is col
// if so set m[x][y] = 0, return the matrix at the end of the function
*/
