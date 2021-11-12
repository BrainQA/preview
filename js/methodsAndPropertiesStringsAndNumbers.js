"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // метод ищет с какого индекса начинается или слово или буква
console.log(fruit.indexOf("q")); // здесь такой буквы нет, поэтому будет -1

const logg = "Hello world!";

console.log(logg.slice(6, 11)); // метод вырезает слова или буквы(здесь начиная с 6 индекса заканчивая 11)
console.log(logg.slice(6)); // здесь с 6 и до конца строки
console.log(logg.slice(-5, -1)); // также принимает отрицательные числа

console.log(logg.substring(6, 11)); // тоже самое что и slice

console.log(logg.substr(5, 6)); // первая цифра говорит с какого индекса начать вырезать, 
// а вторая сколько символов надо вырезать

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));