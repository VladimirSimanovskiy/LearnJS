"use strict"

function spy(func) {
  wrapper.calls = new Array();

  function wrapper(...args) {
    wrapper.calls.push(args);
    let result = func.apply(this, args);
    return result;
  }


  return wrapper;
}


function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}