// This all the things are intorduced after the ES6.

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user = new User("Parth", "parthc2002@gmail.com", "parthabc");

// console.log(user.encryptPassword());
// console.log(user.changeUsername());


// Behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

const tea = new User("Tea", "tea@gmail.com", "teaabc");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());