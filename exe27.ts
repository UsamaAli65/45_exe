// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log(`1rd version where align is green`);
let alien_colors: string = "green";

if (alien_colors === "green") {
    console.log("You earned 5 points!");
} else if (alien_colors === "yellow") {
    console.log("You earned 10 points!");
} else if (alien_colors === "red") {
    console.log("You earned 15 points!");
} else {
    console.log("You earned 0 points!");
    
}

console.log(`2rd version where align is yellow`);
alien_colors = "yellow";
if (alien_colors === "green") {
    console.log("You earned 5 points!");
} else if (alien_colors === "yellow") {
    console.log("You earned 10 points!");
} else if (alien_colors === "red") {
    console.log("You earned 15 points!");
} else {
    console.log("You earned 0 points!");
}

console.log(`3rd version where align is red`);

alien_colors = "red";
if (alien_colors === "green") {
    console.log("You earned 5 points!");
} else if (alien_colors === "yellow") {
    console.log("You earned 10 points!");
} else if (alien_colors === "red") {
    console.log("You earned 15 points!");
} else {
    console.log("You earned 0 points!");
}
