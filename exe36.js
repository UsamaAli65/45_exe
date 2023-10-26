// 36._ T-Shirt: Write a function called make_shirt() that accepts
// a size and the text of a message that should be printed on
// the shirt. The function should print a sentence summarizing the
// size of the shirt and the message printed on it. Call the function.
var make_shirt = function (size, message) {
    console.log("The size of the shirt is ".concat(size, " and the message printed on it is ").concat(message));
};
var size = "Medium";
var message = "Typescript without errors";
make_shirt(size, message);
make_shirt("Large", "Typescript without errors");
