"use strict"

function printNumbers(from, to) {

  let second = from;

  let timer = setInterval(function() {
    (second > to) ? clearInterval(timer) : console.log( second );
    second++;
  }, 1000);


};

printNumbers(4, 10);