// Dates 

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate=new Date(2024,4,30);
// let myCreatedDate=new Date(2024,4,30,2,56,20);
// let myCreatedDate=new Date('2024-01-24');    
let myCreatedDate = new Date('01-24-2024');
// console.log(myCreatedDate.toLocaleString());


let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(myTimestamp-myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    dateStyle: "full",
    hourCycle: "h12"
})
)