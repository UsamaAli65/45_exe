"use strict";
// 31._ No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernNames = ["admin", "Bob", "Jane", "Bob", "Jane", "Bob", "Jane", "Bob",];
function greetUser(username) {
    if (username.length === 0) {
        console.log("We need to find some users!");
        return;
    }
    ;
    for (var _i = 0, usernNames_1 = usernNames; _i < usernNames_1.length; _i++) {
        var username_1 = usernNames_1[_i];
        if (username_1.toLowerCase() === "admin") {
            console.log("Hello admin, whould you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username_1, ", thank you for logging in again"));
        }
    }
    ;
}
console.log("For non empty username: \n");
greetUser(usernNames);
usernNames = [];
console.log("/n/n For empty username: \n");
greetUser(usernNames);
