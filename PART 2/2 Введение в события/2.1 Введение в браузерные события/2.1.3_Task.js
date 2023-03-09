button.addEventListener("click", () => alert("1"));    // сработает, потому что предана стрелочная функция, удалить которую строка 3 не сможет

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);  //сработает