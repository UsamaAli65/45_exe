// 14._ Guest List: If you could invite anyone, living or deceased
// to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite
// to dinner. Then use your list to print a message to each
// person, inviting them to dinner.
var guestList = [
    "Zia Khan",
    "muhammad Ali Jinnah",
    "Waqar Zaka",
    "Iqbal",
    "Allama Ehsan Elahi Zaheer ",
];
guestList.forEach(function (guestName) {
    console.log("Dear ".concat(guestName, ", I would like to invite you to dinner."));
});
