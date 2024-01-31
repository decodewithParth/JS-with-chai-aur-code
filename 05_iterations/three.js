// for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting="Hello , Parth";
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}



// Map 

const map=new Map();
map.set('IN','India');
map.set('CA','Canada');
map.set('FA','France');

// console.log(map);

for (const [key,value] of map) {
    // console.log(key," :- ",value);
}



// Object 
const myObject={
    game1:'COC',
    game2:'CR'
}

// for (const [key,value] of myObject) {
//     console.log(key);
// }


// for of never works on objects