"use strict"

let sum = function (num) {

  sum.toString = function() {
  let total = sum.total;
  sum.total = 0;
  return total;
  };
  
  if (sum.total) {
  sum.total += num;
  } else {
  sum.total = num;
  }
  
  return sum;
  }


console.log( JSON.parse(sum(1)(2))  );
console.log( JSON.parse(sum(1)(2)(3)) );
console.log( JSON.parse(sum(5)(-1)(2)) );
console.log( JSON.parse(sum(6)(-1)(-2)(-3)) );
console.log( JSON.parse(sum(0)(1)(2)(3)(4)(5)) );