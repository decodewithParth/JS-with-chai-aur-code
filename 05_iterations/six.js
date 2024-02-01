// const coding=["js","java","python","ruby","perl"];

// forEach is not giving the values back to the any variables

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })

// console.log(values);



const myNums=[1,2,3,4,5,6];

// let fil=myNums.filter((num)=> num>4);

// let fil=myNums.filter((num)=> {
//     return num>4;  // when we start in parenthesis (scope) then we have to write written return key word
// });


const newNums=[]

myNums.forEach((num)=>{
    if(num>3){
        newNums.push(num);
    }
})

// console.log(newNums);




const books=[
    {title:'Book one' , genre:'Fiction',publish:1998,edition:2004},
    {title:'Book two' , genre:'Love',publish:1990,edition:2001},
    {title:'Book three' , genre:'Love',publish:1999,edition:2005},
    {title:'Book four' , genre:'Fiction',publish:1992,edition:1995},
    {title:'Book five' , genre:'Fiction',publish:2000,edition:2006},
    {title:'Book six' , genre:'Horro',publish:1993,edition:2002},
    {title:'Book seven' , genre:'Horror',publish:2000,edition:2002},
    {title:'Book eight' , genre:'History',publish:1999,edition:2006},
    {title:'Book nine' , genre:'History',publish:1990,edition:2003},
    {title:'Book ten' , genre:'Fiction',publish:1994,edition:2005}
]

let userBooks=books.filter((book)=> (book.publish)>1995 && (book.genre==="History"))

userBooks=books.filter((book)=>{
    return book.publish>1999
})

userBooks=books.filter((book)=> book.title);
console.log(userBooks);
