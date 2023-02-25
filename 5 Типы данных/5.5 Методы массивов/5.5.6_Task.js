"use strict"

function Calculator() {
  this.method = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function(str) {
    let arr = str.split(' ');
    let a = +arr[0];
    let operator = arr[1];
    let b = +arr[2];

    return this.method[operator](a, b);
  };

  this.addMethod = function(oper, func) {
    this.method[oper] = func;
  };
}


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log( powerCalc.calculate("2 ** 3") );