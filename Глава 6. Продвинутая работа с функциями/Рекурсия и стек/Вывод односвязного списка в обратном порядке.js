'use strict';

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//цикл

function printReverseList(list) {
  let arr = [];
  let copyList = list;

  while (copyList) {
    arr.push(copyList.value);
    copyList = copyList.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

printReverseList(list);

//рекурсия

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

printReverseList(list);