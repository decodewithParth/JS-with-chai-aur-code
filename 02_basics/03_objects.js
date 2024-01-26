// singleton
// Object.create()

// Object Literals

const mySym=Symbol('symbol1');

const jsUser={
    name:"Parth",
    "full name":"Parth Chauhan",
    [mySym]:"key1",    // this is the format to add the symbol in object
    age:18,
    location:"Visnagar",
    email:"parth@gmail.com",
    isLoggedIn:false,
    lastLogin:["Sunday","monday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.location="Mumbai";
// Object.freeze(jsUser);
// jsUser.location="Banglore";
// console.log(jsUser["location"]);
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello js user");
}

jsUser.greetingTwo=function(){
    console.log(`Hello js user , ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
