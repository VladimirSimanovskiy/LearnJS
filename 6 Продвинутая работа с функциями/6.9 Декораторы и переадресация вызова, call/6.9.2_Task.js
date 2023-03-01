"use strict"

function delay(f, ms) {
  let tempThis = this;
    return (...args) => {
      let result = () => f.apply(tempThis, args);
      let timer = setTimeout(result, ms)
      return timer;
    }
  }

function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");