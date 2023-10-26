// 31._ No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let usernNames: string[] = ["admin","Bob", "Jane", "Bob", "Jane", "Bob", "Jane", "Bob",]
function greetUser(username: string[]): void {
    if (username.length === 0) {
        console.log("We need to find some users!")
        return
};

for (const username of usernNames) {
    if (username.toLowerCase() === "admin") {
        console.log(`Hello admin, whould you like to see a status report?`)
        } else {
            console.log(`Hello ${username}, thank you for logging in again`);
            
        }               
};
}
console.log(`For non empty username: \n`);
greetUser(usernNames);

usernNames = [];

console.log(`/n/n For empty username: \n`);
greetUser(usernNames);
export {};