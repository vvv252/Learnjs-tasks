'use strict';

function sum(a) {

  let actualSum = a;

  function f(b) {
    actualSum += b;
    return f;
  }

  f.toString = function() {
    return actualSum;
  };

  return f;
}

alert( sum(1)(2) );
alert( sum(5)(-1)(2) );
alert( sum(6)(-1)(-2)(-3) );
alert( sum(0)(1)(2)(3)(4)(5) );