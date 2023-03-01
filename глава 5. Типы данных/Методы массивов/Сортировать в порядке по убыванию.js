'use strict';

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b > a ? 1 : -1);

alert( arr ); // 8, 5, 2, 1, -10