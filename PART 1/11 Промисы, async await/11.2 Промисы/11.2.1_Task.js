"use strict"

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log); // выводит "1", т.к. обрабатывается только первый resolve