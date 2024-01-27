// const tinderObj=new Object();
const tinderUser={}

tinderUser.id="#1001";
tinderUser.name="Janak";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"parth@google.com",
    fullname:{
        userfullname:{
            firstname:"Parth",
            middlename:"Dineshkumar",
            lastname:"Chauhan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.middlename);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

// const obj3=Object.assign(obj1,obj2); // in this static method of assign in objects the first parameter is called target and all other parameters are source which will going to merge
// const obj3=Object.assign({},obj1,obj2);   // {} is target and all other are source
const obj3={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:"1",
        email:"1@gmail.com"
    },
    {
        id:"2",
        email:"2@gmail.com"
    },
    {
        id:"3",
        email:"3@gmail.com"
    },
    {
        id:"4",
        email:"4@gmail.com"
    }
]

// console.log(users);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));



const course={
    courseName:"JS in hindi",
    courseFee:"999",
    courseInstructor:"Hitesh Choudhary"
}

// course.courseInstructor

const {courseInstructor:teacher,courseName,courseFee}=course;
// console.log(courseInstructor);
console.log(teacher);