// КЛАССИФИКАЦИЯ ТИПОВ ДАННЫХ В JS

"use strict";

let number = 4.6;
console.log(number);

console.log(4 / 0); // получаем Infinity
console.log(-4 / 0); // получаем -Infinity

console.log('string' * 9); // получаем NaN

const person = `5`; // строка

const bool = false;

// console.log(something); // null

let und;
console.log(und);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};
// console.log(obj.name);
// console.log(obj[name]); //ошибка name is not defined
console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {},
    []
];
console.log(arr[1]);