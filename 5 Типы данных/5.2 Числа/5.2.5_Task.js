"use strict"

function random() {
  let min = +prompt("Введите минимальную границу диапазона", 0);
  let max = +prompt("Введите максимальную границу диапазона", 1);
  return Math.random() * (max - min) + min;
}

