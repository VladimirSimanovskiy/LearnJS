"use strict"

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let timeRead = new WeakMap();

timeRead.set(messages[0], new Date(2023, 2, 18));

console.log( timeRead.get(messages[0]) );