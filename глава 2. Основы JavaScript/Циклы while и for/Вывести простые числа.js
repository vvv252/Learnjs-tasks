"use strict";

let n = 10;

primeNumber: for (let i = 0; i < n**(1/2); i++) {
	for (let j = 0; j < i; j++) {
		if (i % j == 0)
			continue primeNumber;
	}
	alert(i);
}