const user = {
    username: "Parth Chauhan",
    loginCount: 11,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from the database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




//  In javascript, this keyword is refered as constructor of object literal or used to create new executional context
const promiseOne = new Promise(function(){});
const date = new Date();


function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome , ${this.username}`);
    }

    return this;
}

// Without new key word the below code userTwo value will override the values of userOne , that's why we are using the new keyword to make new instance of method or functionality
// const userOne=User("Parth",6,false);
// const userTwo=User("Chai Aur Code",18,true);
// console.log(userOne);

const userOne= new User("Parth",6,false);
const userTwo= new User("Chai Aur Code",18,true);
console.log(userOne.constructor);  // this will points to it self that original User funciton which acts as constructor
console.log(userTwo);


//  What happened when we use 'new' keyword - 
// Step - 1  -> new object will create
// Step - 2  -> constructor function called when new keyword is used
// Step - 3  -> all the arguments will be injected in new instance created
// Step - 4  -> now you can use that new instance