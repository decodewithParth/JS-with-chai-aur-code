class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return `Email is : ${this._email.toUpperCase()}`
    }

    set email(value) {
        this._email=value.toUpperCase();
    } 
    
    get password() {
        return `A${this._password}Parth`;
    }

    set password(value) {
        this._password = value.toUpperCase();
    }
}

const parth = new User("parth@google.com", "abc");
console.log(parth.password);
console.log((parth.email));