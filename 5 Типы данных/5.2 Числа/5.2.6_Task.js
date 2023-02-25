"use strict"

function randomInteger() {
  let min = +prompt("Введите минимальную границу диапазона", 0);
  let max = +prompt("Введите максимальную границу диапазона", 1);
  return Math.floor(Math.random() * (max - min)) + min;
}