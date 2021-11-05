// ОПЕРАТОРЫ В JS

"use strict";

console.log('arr' + " - object");

console.log('arr' + +" - object"); //ошибка NaN

console.log(4 + +"5");

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr);
console.log(decr);

// console.log(incr++);
// console.log(decr--);

console.log(++incr);
console.log(--decr);

console.log(5 % 2);

console.log(2 * 4 == 8); // просто равенство

console.log(2 * 4 === '8'); // строгое равенство

const isChecked = false,
    isClose = true;

console.log(isChecked && isClose);