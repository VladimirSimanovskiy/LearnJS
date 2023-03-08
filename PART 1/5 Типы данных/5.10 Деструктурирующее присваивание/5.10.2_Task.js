"use strict"

function topSalary(obj) {
  let maxSalary = {
    "name": null,
    "salary": null,
  };

  for (let [key, value] of Object.entries(obj)) {
    if (value > maxSalary.salary) {
      maxSalary.name = key;
      maxSalary.salary = value;
    };
  };
  return maxSalary.name;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( topSalary(salaries) );