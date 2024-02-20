const User={
    _email:"g@gnu.ac.in",
    _password:"pass",

    get email(){
        return this._email.toLocaleUpperCase();
    },

    set email(value){
        this._email=value;
    }


}


// this syntax is reraly used now a days

const tea=Object.create(User);

console.log(tea.email);