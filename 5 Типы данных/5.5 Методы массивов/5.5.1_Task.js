"use strict"

function camelize(str) {
  let arr = str.split('-');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].at(0).toUpperCase() + arr[i].slice(1);
  }
  let result = arr.join('');
  return result;
}

console.log( camelize("background-color") );