// 44._ Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.Call the function three times,
// using a different number of arguments each time
function sandwich(...items) {
    console.log("I want a sandwich with:");
    if (items.length === 0) {
        console.log("nothing. Your order is empty – please add some items.");
    }
    else {
        items.forEach((item, i) => {
            console.log(`${i + 1}. ${item}`);
        });
    }
    console.log("\n");
}
sandwich(); // Call with no arguments to show an empty sandwich.
sandwich("bread", "cheese", "tomato", "lettuce"); // Call with some ingredients.
sandwich("Turkey", "Lettuce", "Tomato", "mayo"); // Call with different ingredients.
sandwich("WoW", "Cheese"); // Call with different ingredients.
export {};
