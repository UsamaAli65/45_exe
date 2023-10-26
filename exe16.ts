// 16._ More Guests: You just found a bigger dinner table,
// so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
// you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one
// new guest to the end of your list. • Print a new set of invitation messages,
// one for each person in your list.

let guestList: Array<string> = [
    "Zia Khan",
    "Waqar Zaka",
    "Muhammad Ali",
];

console.log("We Found a Bigger Dinner Table.");

let newGuest1: string = "John Smith";
guestList.unshift(newGuest1);

let newGuest2: string = "Sara Johnson"; 
let index: number = Math.floor(guestList.length / 2);
guestList.splice(index, 0, newGuest2);

let newGuest3: string = "Ahmed Ahmed"; 
guestList.push(newGuest3);

console.log("New Set Of Invitation Messages:");

for (let guest of guestList) {
    console.log(`Hello, ${guest}, We Found a Bigger Dinner Table.`);
}
