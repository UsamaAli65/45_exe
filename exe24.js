// // 24._ More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings
// // • Tests using the lower case function
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// // • Tests using "and" and "or" operators
// // • Test whether an item is in a array
// // • Test whether an item is not in a array
var str1 = "hello";
var str2 = "world";
console.log(str1 === str2);
console.log(str1 !== str2);
var text1 = "hello";
var text2 = "world";
console.log(text1.toLowerCase() === text2);
var num1 = 5;
var num2 = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
var x = 5;
var y = 10;
var z = 15;
console.log(x < y && y < z); // True
console.log(x < y || y > z);
console.log(x > y && y < z);
console.log(x > y || y > z);
var fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("cherry"));
var colors = ["red", "green", "blue", "yellow"];
console.log(!colors.includes("red"));
console.log(!colors.includes("green"));
