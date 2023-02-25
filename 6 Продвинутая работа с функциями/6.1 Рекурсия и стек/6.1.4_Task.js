"use strict"

function printList(list) {
  if (list.next == null) {
    console.log(list.value);
  } else {
    console.log(list.value);
    printList(list.next);
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);