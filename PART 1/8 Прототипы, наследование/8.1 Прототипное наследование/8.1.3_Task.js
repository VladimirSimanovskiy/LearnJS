"use trict"

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// Запись будет произведена в объект rabbit, т.к.прототипное наследование не меняет родительский объект