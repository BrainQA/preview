// ПЕРЕМЕННЫЕ И СТРОГИЙ РЕЖИМ

"use strict"; // это режим строгого современного кода, 
// который позволяет избавится от неточностей старого кода
// console.log(1);

let number = 5;
const leftbBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};
obj.a = 10;
console.log(obj);

console.log(name);
var name = 'Ivan';

// {
//     let result = 50;    //здесь есть ошибка, что переменная let недоступна
// }
// console.log(result);

{
    var result = 50; // здесь нет ошибки, что переменная var недоступна, 
} // в этом отличее этих переменных
console.log(result); // поддержка переменных можно посмотреть на сайте Can I Use