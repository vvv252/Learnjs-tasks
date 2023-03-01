'use strict';

function sumInput() {
	let values = [];

	while (true) {
		let value = prompt('Введите значение:', 0);
		if (value === '' || !isFinite(value) || value === null) break;

		values.push(+value);
	}

	let sum = 0;

	for (let key in values) {
		sum += key;
	}

	return sum;
}

alert(sumInput());