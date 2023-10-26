// 35._ Animals: Think of at least three different animals
// that have a common characteristic. Store the names of these animals
// in a list, and then use a for loop to print out the name of each
// animal. • Modify your program to print a statement about each animal,
// such as A dog would make a great pet. • Add a line at the end of your
// program stating what these animals have in common. You could print asentence such
// as Any of these animals would make a great pet!


// const animals: string[] = ["dog", "cat", "fish"];
// console.log("These are animals:");

// for (const animal of animals) {
//     console.log(animal);

// }

// for (const animal of animals) {
//     if (animal === "dog") {
//         console.log(`This is ${animal} animals would make a great pet!`);
//     } else if (animal === "cat") {
//         console.log(`This is ${animal} animals would make a great pet Best!`);
//     }
// }

// console.log("\nWhat these animals have in common:");
// console.log("Any of these animals would make a great pet!");



const animals: string[] = ["dog", "cat", "fish"];
console.log("These are animals:");

for (const animal of animals) {
    console.log(animal);
}

for (const animal of animals) {
    if (animal === "dog") {
        console.log(`A ${animal} would make a great pet.`);
    } else if (animal === "cat") {
        console.log(`A ${animal} would make a great pet as well.`);
    } else if (animal === "fish") {
        console.log(`${animal} is healthy in your body.`);
    }
}

console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");

