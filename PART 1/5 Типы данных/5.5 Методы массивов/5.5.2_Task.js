"use strict"

function filterRange(arr, a, b) {
  let result = arr.filter(item => item >= a && item <= b);
  return result;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filterRange(arr, 1, 4) );