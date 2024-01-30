// If

const isUserLoggedIn = true;
const temperature = 33;

// if (temperature > 30) {
//     console.log("Temparature is moderate outside");
// }
// else {
//     console.log("Temprature is cold outide");
// }
// <,>,<=,>=,==,===,!=,!==

// const score=200;

// if(score>100){
//     const power="fly";
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);



const balance=20120;

// if (balance<10000000) console.log("Your balance is low"),console.log("Please work harder for yourself "); 

// if(balance < 1000){
//     console.log("less than 1000");
// }
// else if(balance < 12912){
//     console.log("less than 12912"); 
// }
// else if(balance < 20000){
//     console.log("less than 20000");
// }
// else{
//     console.log("less than 25000");
// }



const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=true;
const loggedInFromEmail=false;

if(userLoggedIn && debitCard && 2!=2){
    console.log("Allow to purchase");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in ");
}