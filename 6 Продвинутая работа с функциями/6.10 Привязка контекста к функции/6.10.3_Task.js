"use strict"

function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound() );
console.log( bound.test ); // undefined, т.к. bound представляет собой функцию, у которой нет свойства test