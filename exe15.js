"use strict";
// 15._ Changing Guest List: You just heard that one of your guests can’t
// make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
// • tart with your program from Exercise 14. Add a print statement at the end of your program stating
// the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages,
// one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList = [
    "Zia Khan",
    "Muhammad ALi Jinnah",
    "Waqar Zaka"
];
exports.guestList = guestList;
var guestHowCanMakeIt = "Waqar Zaka";
console.log("".concat(guestHowCanMakeIt, " can't make to dinner"));
var newGuest = "Muhammad Ali";
var IndexOfGuest = guestList.indexOf(guestHowCanMakeIt);
if (IndexOfGuest !== -1) {
    guestList[IndexOfGuest] = newGuest;
}
console.log("Second set of invitions messages:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner,"));
});
