//  Primitive - also called call by value type

// 7 types : String, Number , Boolean, Null, Undefined, Symbol, BigInt

// examples:

const score=100.7
const scoreValue=100
const isLoggedIn=true
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');

// console.log(id===anotherId);

const bigNumber=1234543242345n;

// Reference (Non Premitive)

// Array, Objects, Functions

const heros=["Kantara","Garuda","Bhairava"];
let myObj={
    name:"Parth",
    age:21
}

let myFunction=function(){
    console.log("Hello,\n world!");
}

// myFunction();



// +++++++++++++++++ Memory types ++++++++++++++++++++++

// Stack (used in Premitive data types) and Heap (used in Non-Premitive data types)

let myCode="codingWar";

let anotherCode=myCode;
anotherCode="newCode";

console.log(myCode);
console.log(anotherCode)


let objOne={
    email:"one@gmail.com",
    upi:"one@upi"
}

let objTwo=objOne;
objTwo.email="another@gmail.com";

console.log(objOne.email);
console.log(objOne.email);
