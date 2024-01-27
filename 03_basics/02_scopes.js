// var c=300;
let a=100;

if(true){
    let a=10;
    const b=200;
    console.log("INNER LOG : ",a);
}

console.log(a);
// console.log(b);
// console.log(c);


// Note ---> we don't use var to declate a variable because it comes in global scope so we only use const and let 
