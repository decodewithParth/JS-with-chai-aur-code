class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

    // we write static because we don't want to give access to every user.
    static createId(){
        let tempPass="";
        for (let i = 0; i < 5; i++) {
            tempPass+=String(Math.round((Math.random()*10)+1));
        }
        return tempPass;
    }
}

const hitesh=new User("Parth");
// console.log(hitesh.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const iphone=new Teacher("BlueBerry","blueBerry@gmail.com");
iphone.logMe();