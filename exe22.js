"use strict";
// 22._ Intentional Error: If you haven’t received an array index
// error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
function createFruit(name, color, flavor) {
    return {
        name: name,
        color: color,
        flavor: flavor,
    };
}
var fruits = [
    createFruit('apple', 'red', 'sweet'),
    createFruit('banana', 'yellow', 'sweet'),
    createFruit('grape', 'purple', 'sweet'),
    createFruit('orange', 'orange', 'sweet'),
    createFruit('pear', 'green', 'sweet'),
];
var invalidIndex = 10;
console.log("fruits at index ".concat(invalidIndex, ":"), fruits[invalidIndex]);
fruits.forEach(function (fruit, index) {
    console.log("Name: ".concat(fruit.name, ", Color: ").concat(fruit.color, ", flavor").concat(fruit.color, ", Taste: ").concat(fruit.flavor));
});
