// 21._ They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.
// Define a bouquet object
var bouquet1 = {
    name: "Spring Delight",
    price: 250,
    description: "Beautifully fragrant flowers in a lovely arrangement."
};
// Create an array to store bouquet objects
var bouquets = [];
// Add bouquet objects to the array
bouquets.push(bouquet1);
bouquets.push({
    name: "Red Hot",
    price: 350,
    description: "Red and yellow flowers in a lovely arrangement."
});
bouquets.push({
    name: "Freshness",
    price: 250,
    description: "Fresh and clean bouquet."
});
// Display bouquet information
function displayBouquets(bouquets) {
    for (var _i = 0, bouquets_1 = bouquets; _i < bouquets_1.length; _i++) {
        var bouquet = bouquets_1[_i];
        console.log("Title: ".concat(bouquet.name, ",\n        Description: ").concat(bouquet.description, ",\n        Price: $").concat(bouquet.price, ",\n        _______________\n"));
    }
}
// Call the display function
displayBouquets(bouquets);
// _____________________________________________
// 22._ Intentional Error: If you haven’t received an array index
// error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
// function createFruit(name: string, color: string, taste: string) {
//     return {
//         name,
//         color,
//         taste
//     }
// }
// const fruits = [
//     createFruit("Apple", "Red", "Sweet"),
//     createFruit("Banana", "Yellow", "Sweet"),
//     createFruit("Orange", "Orange", "Citrusy"),
//     createFruit("Pear", "Green", "Sweet"),
//     createFruit("Grape", "Purple", "Sweet"),
// ]
