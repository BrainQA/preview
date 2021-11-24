"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // здесь не создается копия объекта, а мы просто передаем ссылку

copy.a = 10;

console.log(copy);
console.log(obj);

// Первый способ создания реальной копиии объекта
function copy2(mainObj) {
    let objCopy = {};
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy2(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(numbers);
console.log(newNumbers);

// Второй способ создания реальной копии объекта с помощью Object.assign
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(clone);
console.log(add);


// Третий Метод для создания копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'cahvchjd';
console.log(oldArray);
console.log(newArray);

// Четвертый оператор для создания резервной копии
// это использование оператора разворота - Spread-оператор

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    interrnet = [...video, ...blogs, 'vk', 'facebook'];

console.log(interrnet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];

const newArray2 = [...array];
console.log(newArray2);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q };
newObj.one = 8;

console.log(newObj);
console.log(q);