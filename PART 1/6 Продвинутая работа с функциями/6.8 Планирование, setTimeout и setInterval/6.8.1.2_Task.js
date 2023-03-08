"use strict"

function printNumbers(from, to) {

  let second = from;

  setTimeout(function iter() {
    if (second <= to) {
      console.log( second );
    } else return;
    second++;
    setTimeout(iter, 1000);
  }, 1000);
};

printNumbers(4, 10);