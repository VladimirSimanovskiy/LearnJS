document.addEventListener('dragstart', function(event) {
  event.preventDefault();
});

document.addEventListener('mousedown', function(e) {
e.preventDefault();
let el = e.target;

if(!el.classList.contains('draggable')) return;

//высота элемента, окна и документа
let elHeight = el.offsetHeight;
let winHeight = document.documentElement.clientHeight;
let docHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
//ширина элемента, окна и документа
let elWidth = el.offsetWidth;
let winWidth = document.documentElement.clientWidth;
let docWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
); 

let shiftX = e.clientX - el.getBoundingClientRect().left;
let shiftY = e.clientY - el.getBoundingClientRect().top;  

el.style.position = 'absolute';

moveAt(e.pageX, e.pageY);

function moveAt(pageX, pageY) {
  let elL = pageX - shiftX;
  let elT = pageY - shiftY;
  
  if(elT < 0) elT = 0;
  if(elL < 0) elL = 0;

  if(elT+elHeight > docHeight) elT = docHeight - elHeight;
  if(elL+elWidth > docWidth) elL = docWidth - elWidth - 1;

  el.style.left = elL + 'px';
  el.style.top = elT + 'px';

  let elX = el.getBoundingClientRect().left;
  let elY = el.getBoundingClientRect().top;  
  
  if(elY < 0 || elX < 0) el.scrollIntoView(true);

  if(elY + elHeight > winHeight) window.scrollBy(0, elHeight - winHeight + elY);
  if(elX + elWidth > winWidth) window.scrollBy(elWidth - winWidth + elX, 0);
  
}

function onMouseMove(e) {
  moveAt(e.pageX, e.pageY);
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

});