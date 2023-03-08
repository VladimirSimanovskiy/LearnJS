let liElements = document.querySelectorAll('ul >li');

for (let elem of liElements) {
alert(`${elem.firstChild.data}\nКолиество потомков: ${elem.getElementsByTagName('li').length}`);
}