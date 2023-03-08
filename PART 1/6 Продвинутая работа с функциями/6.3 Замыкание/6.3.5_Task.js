"use strict"

function inBetween(start, end) {
  let i = 0;
  return function() {
    let value = (arr[i] >= start) && (arr[i] <= end);
    i++;
    return value;
  }
}

function inArray(array) {
  let i = 0;
  return function() {
    return array.includes(arr[i++])
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2