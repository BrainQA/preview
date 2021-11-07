"use strict";

if (4 == 4) {
    console.log("ok!");
} else {
    console.log("Error!");
}

const num1 = 50;

if (num1 < 49) {
    console.log('Error');
} else if (num1 > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

(num1 == 50) ? console.log('Ok!'): console.log('Error!'); // тернарный оператор
4 + 4; // бинарный оператор
+
'4'; // унарный оператор

const num2 = 50;

switch (num2) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}