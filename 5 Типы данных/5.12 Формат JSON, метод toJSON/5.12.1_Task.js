"use strict"

let user = {
  name: "Василий Иванович",
  age: 35
};

user = JSON.stringify(user);

console.log( user );

let newUser = JSON.parse(user);

console.log( newUser );