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

console.log(loginUserMessage("Parth"));