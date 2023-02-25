"use strict"

function readNumber() {
  let num;
  do {
     num = prompt("Введите число", "");
  } while (!isFinite(num));
  return Number(num);
}

alert(readNumber());