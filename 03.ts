

let personName: string = "Muhammad Usama Ali";

// Step 01: Convert to lowercase
let lowerCaseName: string = personName.toLowerCase();
console.log("Lowercase Name: " + lowerCaseName);

// Step 02: Convert to uppercase
let upperCaseName: string = personName.toUpperCase();
console.log("Uppercase Name: " + upperCaseName);

// Step 03: Convert to titlecase
let words: string[] = personName.split(" ");
let titleCaseName: string = "";

for (let i = 0; i = 0; i--) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}

console.log("Titlecase Name: " + titleCaseName.trim());
