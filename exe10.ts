// 10._ Adding Comments: Choose two of the programs you’ve written,
// and add at least one comment to each. If you don’t have anything
// specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file.
// Then write one sentence describing what the program does.


let personName : string = "Usama Ali";

let lowerCaseName : string = personName.toLowerCase();
let upperCaseName : string = personName.toLowerCase();

let words: string[] = personName.split(" ");

let titleCaseName : string = ""

for (let i = 0; i < words.length; i++){
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
    
}


console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);

