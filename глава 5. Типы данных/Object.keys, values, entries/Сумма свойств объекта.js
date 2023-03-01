'use strict';

function sumSalaries(salaries) {
    let sum = 0;
    for(let sal of Object.values(salaries)) {
        sum += sal;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries)); // 650