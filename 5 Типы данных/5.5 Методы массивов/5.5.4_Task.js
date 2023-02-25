"use strict"

let arr = [5, 2, 1, -10, 8];

function compare(a, b) {
  return b - a;
}

arr.sort(compare);

console.log(arr);