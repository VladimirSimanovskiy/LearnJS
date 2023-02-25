"use strict"

function reversePrintList(list) {
  if (list.next == null) {
    console.log(list.value);
  } else {
    reversePrintList(list.next);
    console.log(list.value);
  };
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

reversePrintList(list)