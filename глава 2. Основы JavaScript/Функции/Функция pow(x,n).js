"use strict";

function pow(a, b) {
	let result = a;
	for (let i = 1; i < b; i++) {
		result = result*a;
	}
	return result;
}

let a = prompt("Введите значение числа а:", '');
let b = prompt("Введите показатель степени b:", '');

if (n < 1) {
  alert(`Показатель степени ${b} должен быть натуральным числом`);
} else {
  alert(pow(a, b));
}