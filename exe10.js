// 10._ Adding Comments: Choose two of the programs you’ve written,
// and add at least one comment to each. If you don’t have anything
// specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.
var personName = "Usama Ali";
var lowerCaseName = personName.toLowerCase();
var upperCaseName = personName.toLowerCase();
var words = personName.split(" ");
var titleCaseName = "";
for (var i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);
