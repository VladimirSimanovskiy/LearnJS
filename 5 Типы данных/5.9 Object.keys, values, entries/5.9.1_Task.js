"use strict"

function sumSalaries(obj) {
  let tempArray = Object.values(obj);
  let sum = 0;
  for (let i of tempArray) {
    sum += i;
  }
  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) );