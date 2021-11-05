// ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

"use strict";

// alert("Hello!");

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt("Вам есть 18?", "");
// console.log(typeof(answer));                  // typeof проверяет тип данных

// const answer = +prompt("Вам есть 18?", ""); // + перед prompt переварачивает тип данных string в number
// console.log(typeof(answer));

// const answer = +prompt("Вам есть 18?", "");
// console.log(answer + 5);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');
document.write(answers);

console.log(typeof(answers));
console.log(typeof(null));