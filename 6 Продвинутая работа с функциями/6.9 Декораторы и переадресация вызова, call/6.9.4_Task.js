"use strict"

function throttle(f, ms) {
  let callTime = 0;
  let tempThis = this;
  let timer;

  function wrapper(...args) {
    clearTimeout(timer);
    if (Date.now() - callTime > ms) {
      callTime = Date.now();
      return f.apply(tempThis, args);
    } else {
      timer = setTimeout(() => f.apply(tempThis, args), ms - (Date.now() - callTime));
      

      setTimeout
    }
  }
  
  return wrapper;
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
