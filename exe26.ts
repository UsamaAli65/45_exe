// 26._ Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
// and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just
// earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just
// earned 10 points.

// • Write one version of this program that runs the if block and another that
// runs the else block.

console.log(`\n 1nd version of color`);
let alienColor: string = "green";

if (alienColor === "green"){
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");    
}

console.log(`\n 2nd version of color`);


alienColor = "red";
if (alienColor === "green"){
    console.log("The player just earned 5 points for shooting the alien.");
    
} else {
    console.log("The player just earned 10 points.");
    
}
