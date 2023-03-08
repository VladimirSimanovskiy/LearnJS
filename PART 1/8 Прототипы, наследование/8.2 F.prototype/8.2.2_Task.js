"use strict"

function Rabbit(name) {
  this.name = name;
}

let firstRabbit = new Rabbit('White Rabbit');
let secondRabbit = new firstRabbit.constructor('Black Rabbit');

console.log( secondRabbit.name ); // корректно

function Snake(name) {
  this.name = name;
}

Snake.prototype = {};

let firstSnake = new Snake('Red Snake');
let secondSnake = new firstSnake.constructor('Blue Snake');

console.log( secondSnake.name ); // не корректно, т.к. свойство constructor в prototype не назначено