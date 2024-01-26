const score=300
// console.log(score);

const gameScore=new Number(1000);
// console.log(gameScore);

// console.log(gameScore.toString().length);
// console.log(gameScore.toFixed(1));

const num=238.92342;
// console.log(num.toPrecision(5));
// console.log(num.toPrecision(2));


const hundreds=10000000000;
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-23));
// console.log(Math.round(23.4632));
// console.log(Math.ceil(23.46));
// console.log(Math.floor(23.46));
// console.log(Math.min(1,2,6,2,5));
// console.log(Math.max(1,2,6,2,5));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);


// let's make the formula for the range of random number we get

const min=10;
const max=20;

const formula=Math.floor(Math.random() * (max-min+1)) + min;   // formula for range of random number
console.log(formula);