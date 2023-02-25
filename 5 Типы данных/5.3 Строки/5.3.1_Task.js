"use strict"

function ucFirst(str) {
  if (str.length) {
    return str[0].toUpperCase() + str.slice(1);
  };
  return '';
}