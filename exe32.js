// 32._ Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// const current_users = ['ali', 'Jane', 'muhammad ali', 'Ali E', 'usama'];
// const new_users = ['maham', 'sadiq', 'Ahmed', 'zaka', 'waqas'];
// // const num1: number[] = [1,2,3,4,5,6,7,8,9,10]
// // console.log(num1);
// // const num2: number[] = num1.map(num => num * 2)
// // console.log(num2);
// // Functions.....
// function checkUsername(username: string[], new_users: string[]): void {
//     const lowerCaseUsername = current_users.map(user => user.toLowerCase());
//     for (const newUser1 of new_users) {
//         const lowerCaseUsername1 = newUser1.toLowerCase();
//         if (lowerCaseUsername.includes(lowerCaseUsername1)) {
//             console.log(`Username ${newUser1} already taken, please enter a new username`);
//         } else {
//             console.log(`Username ${newUser1} is available`);
//         }
//     }
//     console.log(current_users);
// }
// // for (let i = 0; i < new_users.length; i++)
// checkUsername(current_users, new_users);
// const current_users = ['ali', 'Jane', 'muhammad ali', 'Ali E', 'usama'];
// const new_users = ['maham', 'sadiq', 'Ahmed', 'zaka', 'waqas'];
// function checkUsername(current_users: string[], new_users: string[]): void {
//     const lowerCaseCurrentUsers = current_users.map(user => user.toLowerCase());
//     for (const newUser of new_users) {
//         const lowerCaseNewUser = newUser.toLowerCase();
//         if (lowerCaseCurrentUsers.includes(lowerCaseNewUser)) {
//             console.log(`Username ${newUser} already taken, please enter a new username`);
//         } else {
//             console.log(`Username ${newUser} is available`);
//         }
//     }
// }
// checkUsername(current_users, new_users);
// Make a list of current users
var currentUsers = ['ali', 'Jane', 'muhammad ali', 'Ali E', 'usama'];
// Make a list of new users
var newUsers = ['maham', 'sadiq', 'Ahmed', 'zaka', 'waqas'];
var _loop_1 = function (newUser) {
    // Check if the new username is already in use (case-insensitive)
    var isUsernameTaken = currentUsers.some(function (username) { return username.toLowerCase() === newUser.toLowerCase(); });
    // Print a message based on the result
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
};
// Loop through new_users list
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
