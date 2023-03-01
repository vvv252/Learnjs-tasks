'use strict';

function unique(arr) {
    let res = [];
    for (let str of arr) {
    if (!res.includes(str)) {
        res.push(str);
    }
  }
  return res;
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O