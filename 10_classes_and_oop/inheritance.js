class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const chai=new Teacher("Hiten","hiten@gnu.ac.in","HMsadani");
chai.addCourse();

const masalaChai=new User("MasalaChai");
masalaChai.logMe();

console.log(chai == masalaChai);
console.log(chai === masalaChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User );