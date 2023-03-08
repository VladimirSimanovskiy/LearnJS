"use strict"

function extractCurrencyValue(str) {
  return (str.length > 0) ? +str.slice(1) : str;
}