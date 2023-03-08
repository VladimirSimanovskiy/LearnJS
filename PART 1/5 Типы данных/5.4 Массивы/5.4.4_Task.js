"use strict"

function sumInput() {
  let userArray = [];
  let item;
  let result = 0;

  while (true) {
    item = prompt("Введите элемент массива", "");
    if (item == null || item == '' || !isFinite(item)) {
      break;      
    }
    userArray.push(item);
  }
  for (let num of userArray) {
    result += +num;
  }
  return result;
}