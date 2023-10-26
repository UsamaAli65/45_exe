"use strict";
// Stripping Names: Store a person’s name,
// and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
let personNameWithWhitespace = "\t Muhammad Usama Ali \t";
console.log("Name with Whitespace:", personNameWithWhitespace);
let strippedName = personNameWithWhitespace.trim();
// console.log("\nName after Stripping Whitespace:");
console.log("strippedName", strippedName);
