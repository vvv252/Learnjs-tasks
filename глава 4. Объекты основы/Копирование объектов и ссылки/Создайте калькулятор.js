'use strict';

let calculator = {
	read() {
		this.a = +prompt('Значение а:', 0);
		this.b = +prompt('Значение b:', 0);
	}

	sum() {
		return this.s + this.b;
	}

	mul() {
		return this.a * this.b;
	}
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );