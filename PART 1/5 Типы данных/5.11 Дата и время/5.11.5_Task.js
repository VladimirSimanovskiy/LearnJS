"use strict"

function getLastDayOfMonth(year, month) {
  let maxDay = 0;
  let date = new Date();
  date.setFullYear(year, month, 27);
  do {
     maxDay = date.getDate();
     date.setDate(date.getDate() + 1);
  } while (date.getMonth() == month);
  return maxDay;
}

console.log(getLastDayOfMonth(2012, 1));