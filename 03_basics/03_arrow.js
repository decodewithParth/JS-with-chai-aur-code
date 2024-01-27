const user = {
    username: "Parth",
    price: 239,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the website.`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Ram"
// user.welcomeMessage();



// function chai(){
//     let username="Chai";
//     console.log(this.username);  // this don't work in functions it works well with   ` objects `
// }

// chai();

// const chai=function(){
//     let username="Chai";
//     console.log(this.username);
// }

const chai = () => {
    let username = "Chai";
    console.log(this.username);
}

// chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// const addTwo=(num1,num2)=> num1+num2;

// const addTwo=(num1,num2)=> (num1+num2);

const addTwo=(num1,num2)=> ({username:"Hidan"});  // this will return object 

console.log(addTwo(2,10));