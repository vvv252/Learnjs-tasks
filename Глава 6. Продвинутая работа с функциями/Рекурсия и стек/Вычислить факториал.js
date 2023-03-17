'use strict';

let multiply = 1;

function factorial(n) {
	if (n != 1) {
		multiply = n * factorial(n - 1) : 1;
	}

  	return multiply;
}

alert( factorial(5) );