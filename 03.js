"use strict";
let personName = "Muhammad Usama Ali";
// Step 01: Convert to lowercase
let lowerCaseName = personName.toLowerCase();
console.log("Lowercase Name: " + lowerCaseName);
// Step 02: Convert to uppercase
let upperCaseName = personName.toUpperCase();
console.log("Uppercase Name: " + upperCaseName);
// Step 03: Convert to titlecase
let words = personName.split(" ");
let titleCaseName = "";
for (let i = 0; i = 0; i--) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log("Titlecase Name: " + titleCaseName.trim());
