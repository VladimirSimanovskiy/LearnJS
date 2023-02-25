"use strict"

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessage = new WeakSet();

readMessage.add(messages[1])

console.log(readMessage.has(messages[0]));
console.log(readMessage.has(messages[1]));
console.log(readMessage.has(messages[2]));