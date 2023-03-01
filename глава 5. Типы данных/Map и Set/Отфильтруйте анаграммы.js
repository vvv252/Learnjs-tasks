'use strict';

function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        map.set(word.toLowerCase().split("").sort().join(""), word);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"