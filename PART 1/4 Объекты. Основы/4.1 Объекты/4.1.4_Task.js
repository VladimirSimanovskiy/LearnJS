let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalary(object) {
  let result = 0;
  for (let key in object) {
    result += object[key];
  }
  return result;
}

alert( sumSalary(salaries) );