// // 24._ More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings

// // • Tests using the lower case function

// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// // • Tests using "and" and "or" operators

// // • Test whether an item is in a array

// // • Test whether an item is not in a array


// const str1: string = "hello";
// const str2: string = "world";
// console.log(str1 === str2); 
// console.log(str1 !== str2); 

// const text1: string = "hello";
// const text2: string = "world";
// console.log(text1.toLowerCase() === text2); 

// const num1: number = 5;
// const num2: number = 10;
// console.log(num1 === num2); 
// console.log(num1 !== num2);
// console.log(num1 > num2);  
// console.log(num1 < num2); 
// console.log(num1 >= num2); 
// console.log(num1 <= num2);

// const x: number = 5;
// const y: number = 10;
// const z: number = 15;

// console.log(x < y && y < z);  // True
// console.log(x < y || y > z); 
// console.log(x > y && y < z);  
// console.log(x > y || y > z);  

// const fruits: string[] = ["apple", "banana", "cherry"];
// console.log(fruits.includes("apple")); 
// console.log(fruits.includes("cherry")); 

// const colors: string[] = ["red", "green", "blue", "yellow"];
// console.log(!colors.includes("red"));  
// console.log(!colors.includes("green"));  





// Tests for equality and inequality with strings
const str1 = "hello";
const str2 = "world";
console.log("Is str1 equal to str2? I predict False.");
console.log(str1 === str2);

// Tests using the lower case function
const inputString = "OpenAI";
const lowercaseString = inputString.toLowerCase();
console.log("Is lowercaseString equal to 'openai'? I predict True.");
console.log(lowercaseString === "openai");

// Numerical tests
const num1 = 10;
const num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2);
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
const condition1 = true;
const condition2 = false;
console.log("Is condition1 true and condition2 false? I predict False.");
console.log(condition1 && condition2);
console.log("Is condition1 true or condition2 false? I predict True.");
console.log(condition1 || condition2);

// Test whether an item is in an array
const fruits = ["apple", "banana", "cherry", "date"];
const fruitToCheck = "banana";
console.log(`Is ${fruitToCheck} in the 'fruits' array? I predict True.`);
console.log(fruits.includes(fruitToCheck));

// Test whether an item is not in an array
const excludedFruit = "grape";
console.log(`Is ${excludedFruit} not in the 'fruits' array? I predict True.`);
console.log(!fruits.includes(excludedFruit));
