"use strict"

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

function createFullnameObj(item) {
  let result = {
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
  };
  return result;
}

let usersMapped = users.map(item => createFullnameObj(item));

console.log( usersMapped[0].id );
console.log( usersMapped[0].fullName );