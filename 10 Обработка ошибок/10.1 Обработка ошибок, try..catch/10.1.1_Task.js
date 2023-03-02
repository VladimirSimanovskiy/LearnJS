"use strict"

function wordCounter(str) {
  try {
    let strArray = str.split(' ');
    return strArray.length;
  } catch (err) {
    console.log('Произошла ошибка!')
  } finally {   
    console.log('Строка содержит слов:')      // без finnaly текст не был бы выведен
  }
}

console.log(wordCounter('Крокодилы ходят лежа'));