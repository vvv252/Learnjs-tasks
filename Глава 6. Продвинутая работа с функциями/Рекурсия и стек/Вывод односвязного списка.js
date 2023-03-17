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

function printList(list) {
  let copyList = list;

  while (copyList) {
    alert(copyList.value);
    copyList = copyList.next;
  }

}

printList(list);

//рекурсия

function printList(list) {
  alert(list.value);

  if (list.next) {
    printList(list.next);
  }
}

printList(list);

//рекурсия -- самый эффективный вариант
