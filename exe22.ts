// 22._ Intentional Error: If you haven’t received an array index
// error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.


function createFruit(name: string, color: string, flavor: string) {
    return {
        name,
        color,
        flavor,
    };
}

const fruits = [
    createFruit('apple', 'red', 'sweet'),
    createFruit('banana', 'yellow', 'sweet'),
    createFruit('grape', 'purple', 'sweet'),
    createFruit('orange', 'orange', 'sweet'),
    createFruit('pear', 'green', 'sweet'),
]
const invalidIndex = 10;
console.log(`fruits at index ${invalidIndex}:`, fruits[invalidIndex]);

fruits.forEach((fruit, index) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, flavor${fruit.color}, Taste: ${fruit.flavor}`);

});

export{}