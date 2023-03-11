"use strict"

async function getUsers(names) {
  let arr = [];
  for (let user of names) {

  let response = await fetch(`https://api.github.com/users/${user}`);
    if (response.ok) {
      let json = await response.json();
      arr.push(json);
    } else {
      arr.push(null);
    }
  }
  return arr
}