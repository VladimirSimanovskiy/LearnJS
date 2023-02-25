"use strict"

function getWeekDay(date) {
  let week = new Map();
  week.set(0, "ВС")
    .set(1, "ПН")
    .set(2, "ВТ")
    .set(3, "СР")
    .set(4, "ЧТ")
    .set(5, "ПТ")
    .set(6, "СБ");
    

  let day = date.getDay();

  return week.get(day);
}

let date = new Date(2012, 0, 3);
console.log( getWeekDay(date) );  