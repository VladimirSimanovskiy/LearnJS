"use strict"

function* pseudoRandom(seed) {
  while (true) {
    yield seed * 16807 % 2147483647;
    seed *= 16807;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073*/  