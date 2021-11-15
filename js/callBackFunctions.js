"use strict";

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

// Callback функцмя - это функция, 
// которая должна начать свое выполнение только после того как завершила выполняться другая функция

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', function() {
    console.log('Я прошел этот урок!');
});

learnJS('JavaScript', done); // здесь функция не вызывается, мы ее просто передаем туда