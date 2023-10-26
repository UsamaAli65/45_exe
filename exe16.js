// 16._ More Guests: You just found a bigger dinner table,
// so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
// you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one
// new guest to the end of your list. • Print a new set of invitation messages,
// one for each person in your list.
// let guestList: Array<string> = [
//     "Zia Khan",
//     "Waqar Zaka",
//     "Muhammad Ali",
// ];
// for (let guest of guestList) {
//     console.log(`Hello, ${guest}, We Found a Bigger Dinner Table.`);
// }
// let newGuest: string = "Muhammad Ali"
// guestList.unshift(newGuest);
// console.log(guestList);
// let newGuest1: string = "Waqar Zaka"
// let index: number = Math.floor(guestList.length / 2);
// guestList.splice(index, 0, newGuest1);
// console.log(guestList);
// let newGuest2: string = "Zia Khan"
// guestList.push(newGuest2);
// console.log("New Set Of Invitaion messages: ");
// for (let guest of guestList){
//     console.log(`Hello, ${guest}, We Found a Bigger Dinner Table.`);
// }
var guestList = [
    "Zia Khan",
    "Waqar Zaka",
    "Muhammad Ali",
];
console.log("We Found a Bigger Dinner Table.");
var newGuest1 = "John Smith"; // Add a new guest to the beginning of the array
guestList.unshift(newGuest1);
var newGuest2 = "Sara Johnson"; // Add a new guest to the middle of the array
var index = Math.floor(guestList.length / 2);
guestList.splice(index, 0, newGuest2);
var newGuest3 = "Ahmed Ahmed"; // Use push() to add a new guest to the end of the list
guestList.push(newGuest3);
console.log("New Set Of Invitation Messages:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello, ".concat(guest, ", We Found a Bigger Dinner Table."));
}
