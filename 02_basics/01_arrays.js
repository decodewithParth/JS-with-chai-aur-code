// Array
const myArr=[1,2,3,4,5,6,7];
const myHeros=["Shaktiman","boga","Nagraj"];

const myArr2=new Array(8,9,0,12,13);
// console.log(myArr[2]);


// Array Methods

// myArr.push(123);
// myArr.push(34);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(2));

// const newArr=myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice and splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3);

console.log(myn2);
console.log("C ",myArr);


// Slice -> it will not change the original array rather do it in shallow copy
// Splice -> it will change the original array
