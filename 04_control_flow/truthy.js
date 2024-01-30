const userEmail = {}

// if (userEmail) {
//     console.log("Got user email");
// }
// else {
//     console.log("Don't found user email");
// }


// Falsy values which compiler/JS treat as false

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Truthy values which compiler/JS treat as true

// '0',"false"," ",[],{},function(){}


// if(userEmail.length===0){
//     console.log("Array is empty");
// }

// if (Object.keys(userEmail).length === 0) {
//     console.log("Array is empty");
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1=null??3;
// val1=undefined??15;
// val1=null??undefined;
val1=null??1??2;

console.log(val1);


// Ternary Operator

// condition ? true : false
    
const iceTeaPrice=100;
iceTeaPrice <99 ? console.log("Price is acceptable") : console.log("Price is too high to buy");