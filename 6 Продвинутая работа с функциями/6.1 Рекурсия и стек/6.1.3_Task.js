"use strict"

function fib(n) {
  let memory = new Map();
  memory.set(1, 1).set(2, 1);
  let counter = 3;

  function wrapper() {
    if (memory.has(n)) {
      return memory.get(n);
    } else {
      let value = memory.get(counter - 1) + memory.get(counter - 2);
      memory.set(counter, value);
      counter += 1;
      return wrapper();
    }
  }
  return wrapper();
}

console.log( fib(77) );