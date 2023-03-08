"use strict"

let promise = new Promise(function(resolve, reject) {
  resolve(123);
  });

promise
  .then(res => console.log(err))
  .catch(rej => console.log('Ошибка обработана'));  // ошибка, возникшая в then обработается


promise.then(
  result => console.log(err),
  error => console.log('Ошибка обработана') // ошибка, возникшая в then не обработается
  );




  

