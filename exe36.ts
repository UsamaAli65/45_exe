// 36._ T-Shirt: Write a function called make_shirt() that accepts
// a size and the text of a message that should be printed on
// the shirt. The function should print a sentence summarizing the
// size of the shirt and the message printed on it. Call the function.

const make_shirt = (size: string, message: string): void => {
    console.log(`The size of the shirt is ${size} and the message printed on it is ${message}`);
}

let size: string = "Medium";
let message: string = "Typescript without errors";
make_shirt(size, message);

make_shirt("Large", "Typescript without errors");