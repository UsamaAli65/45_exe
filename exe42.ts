// 42._ Great Magicians: Start with a copy of your program from Exercise 39. Write a
// function called make_great() that modifies the array of magicians by adding the
// phrase the Great to each magician’s name. Call show_magicians() to see that the list
// has actually been modified.

// const magicians = ["alice", "david", "carolina"];

// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
        
//     }

// }

// function make_great(magicians: string[]): void {
//     const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`); 
//     return greatMagicians;
// }

// const greatMagicians: string[] = make_great(magicians);
// console.log("Original Magicians: ");
// show_magicians(magicians);

// console.log("\n greatMagicians:" );
// show_magicians(greatMagicians);



const magicians: string[] = ["alice", "david", "carolina"];

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

console.log("Original Magicians:");
show_magicians(magicians);

make_great(magicians); // Modify the original array

console.log("\nGreat Magicians:");
show_magicians(magicians); // Display the modified array
