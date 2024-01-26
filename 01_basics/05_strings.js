const name="Parth"
const repoCount=31

// console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Clash of Clans');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('C'));

const newString=gameName.substring(2,6);
// console.log(newString);

const anotherString=gameName.slice(-14,1);
// console.log(anotherString);

const anotherOne="         .Parth Chauhan    ";
// console.log(anotherOne);
// console.log(anotherOne.trim());


const url="https://parth.in/parth%21chauhan";
console.log(url.replace('%21',"-"));
console.log(url.includes('parth'));

console.log(gameName.split(' ')[0]);