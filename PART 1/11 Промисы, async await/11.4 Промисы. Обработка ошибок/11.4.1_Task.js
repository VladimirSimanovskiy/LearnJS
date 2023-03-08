"use strict"

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log);

// ошибка не обработана, т.к. блок catch выполняется раньше, чем setTimeout возвращает результат с ошибкой