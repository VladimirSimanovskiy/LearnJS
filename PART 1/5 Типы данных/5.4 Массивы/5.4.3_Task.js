let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2]();
/*
Выведет массив:
a,b,function() {
  alert( this );
}
*/