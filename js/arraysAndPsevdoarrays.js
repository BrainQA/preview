"use strict";

const arr = [1, 2, 3, 6, 8];

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

arr.pop(); // удаляет последний элемент в массиве
arr.push(10); // добавляет элемент в конец массива

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));

const arr2 = [41, 12, 3, 16, 8];
arr2.sort(compareNum);
console.log(arr2);

function compareNum(a, b) {
    return a - b;
}