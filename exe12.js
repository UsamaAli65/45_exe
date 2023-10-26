// 11._ Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list,
// one at a time.
// 12._ Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.
var names = ["Muhammad", "Usama", "Ali", "Saad"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Good Morning ".concat(name_1, ", I hope you are having a fantastic Day!"));
}
