"use strict"

function debounce(f, ms) {
  let callTime = 0;
  let tempThis = this;

  function wrapper(...args) {
    if (Date.now() - callTime > ms) {
      callTime = Date.now();
      return f.apply(tempThis, args);
    }
  }
  
  return wrapper;
}


let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)