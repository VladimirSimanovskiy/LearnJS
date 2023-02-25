"use strict"

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

/*
В строке 10 происходит сравнение A.prototype == B.prototype.
Т.к. в 6 строке мы присвоили обоим prototype одинаковое значение, то alert выводит True
*/