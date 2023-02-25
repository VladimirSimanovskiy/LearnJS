"use strict"

function formatDate(date) {
  let secondsToNow = Math.floor((new Date - date) / 1000);

  if (secondsToNow < 1) {
    return 'прямо сейчас';
  };

  if (secondsToNow < 60) {
    return `${secondsToNow} сек. назад`;
  };

  if ( (secondsToNow / 60) < 60) {
    return `${secondsToNow / 60} мин. назад`;
  };

  let dateArray = [
    date.getDate(),
    (date.getMonth() + 1),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];

  let res = [];

  for (let item of dateArray) {
    if (item < 10) {
      item = '0' + item;
    };
    res.push(item);
  }

  return `${res[0]}.${res[1]}.${res[2].toString().slice(-2)} ${res[3]}:${res[4]}`;
}

console.log( formatDate(new Date(new Date - 1)) );

console.log( formatDate(new Date(new Date - 30 * 1000)) );

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );

console.log( formatDate(new Date(new Date - 86400 * 1000)) );