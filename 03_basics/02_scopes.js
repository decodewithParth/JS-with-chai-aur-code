// var c=300;
let a=100;

if(true){
    let a=10;
    const b=200;
    // console.log("INNER LOG : ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// Note ---> we don't use var to declate a variable because it comes in global scope so we only use const and let 


function one(){
    const username="Parth Chauhan";

    function two(){
        const website="google";
        console.log(username);
    }

    // console.log(website);

    two();
}

// one();


if(true){
    const username="Parth";
    if (username==="Parth") {
        const website=" youtube";
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);



// +++++++++++++++++++++++ Interesting +++++++++++++++++++++++


// this is called simple function

console.log(add(5)); // this statement runs perfect without any error
function add(num){
    return num+1;
}


// this is called expression

// console.log(addTwo(4)); // this statement gives error because we con't use expression before intialization of function
const addTwo=function(num){
    return num+2;
}

console.log(addTwo(4));
