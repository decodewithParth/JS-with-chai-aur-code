function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumbers(2,3);

function addTwoNumbers(num1,num2){
    // let result=num1+num2
    // return result;
    return num1+num2;
}

const result=addTwoNumbers(2,6);
// console.log("result : ",result);

function loginUserMessage(username="testUser"){
    if (!username) {
        console.log("Please enter username!!");
        return;
    }
    return `${username} just logged in!`;
}

// console.log(loginUserMessage("Parth"));


function calculateCartPrice(val1,val2,...num){
    return num;
}

// console.log(calculateCartPrice(1000,2323,52,432532));


const user={
    username:"Parth Chauhan",
    price:10909
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//     username:"Het",
//     price:9999999
// })

const myNewArray=[1265,3640,973,7134];

function returnSecondValue(getArray){
    return getArray[2];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,23,562,6234,2436,78956,234]));