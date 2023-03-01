"use strict";

let nameUser = prompt("Кто там?", '');

if (nameUser === "Админ") {
	
  let password = prompt("Пароль?", '');

  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === '' || password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (nameUser === '' || nameUser === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}