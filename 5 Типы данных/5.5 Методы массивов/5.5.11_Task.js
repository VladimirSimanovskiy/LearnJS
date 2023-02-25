"use strict"

function getAverageAge(users) {
  let sumAge = 0;
  for (let user of users) {
    sumAge += user.age;
  };
  return sumAge / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) );