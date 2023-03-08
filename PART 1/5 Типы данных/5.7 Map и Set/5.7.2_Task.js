"use strict"

function aclean(arr) {
  let wordSet = new Set();
  let result = [];
  for (let item of arr) {
    let sortedWord = item.toLowerCase().split('').sort( (a, b) => a > b ? 1 : -1).join('');
    if (wordSet.has(sortedWord)) continue;
    result.push(item);
    wordSet.add(sortedWord);
  };
  return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); 