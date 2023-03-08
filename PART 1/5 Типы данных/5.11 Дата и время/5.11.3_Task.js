"use strict"

function getLocalDay(date) {
  let week = new Map();
  week.set(0, 7)
    .set(1, 1)
    .set(2, 2)
    .set(3, 3)
    .set(4, 4)
    .set(5, 5)
    .set(6, 6);

    let day = date.getDay();

    return week.get(day);
}

let date = new Date(2012, 0, 3);
console.log( getLocalDay(date) ); 