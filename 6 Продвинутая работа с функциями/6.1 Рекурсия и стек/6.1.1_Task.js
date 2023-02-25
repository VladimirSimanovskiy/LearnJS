"use strict"

// Вариани 1 (цикл for)
function sumToFor(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

//Вариани 2 (рекурсия)

function sumToRec(n) {
  return (n == 1) ? 1 : n + sumToRec(n - 1);
}

//Вариант 3 ()

function sumToProg(n) {
  return ((1 + n) / 2) * n;
}

console.log( sumToFor(100) );
console.log( sumToRec(100) );
console.log( sumToProg(100) );
