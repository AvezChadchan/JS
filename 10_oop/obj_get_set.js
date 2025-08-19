const User={
    _email:'srk@gmail.com',
    _pass:'123',
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value
    },
    get pass(){
        return this._pass.toUpperCase();
    },
    set pass(value){
        this._pass=value
    }
}
console.log(User.email);
console.log(User.pass);
