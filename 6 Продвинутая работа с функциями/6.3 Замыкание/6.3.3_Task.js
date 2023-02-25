"use strict"
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // в НЕстрогом режиме результатом будет John.
//В строгом режиме происходит ошибка, т.к. sayHi() вызыается за пределами блока кода {...}