"use strict"

alert( 6.35.toFixed(1) );  // Такое поведение связано с потерей точности

alert( (Math.round(6.35 * 10) / 10).toFixed(1) );  //  Правильный вариант округления
