'use strict';

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(str) {
        try {
            let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                return NaN;
            }
            return this.methods[op](a, b);
        } catch(err) {
            alert(err);
        }
        
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}