class User {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }
    get email() {
        return `${this._email.toUpperCase()}`;
    }
    set email(value) {
        this._email = value;
    }
    get pass() {
        return `xx${this._pass}xyz`
    }
    set pass(value) {
        this._pass = value;
    }
}
const obj = new User('srk@gmail.com', '123')
console.log(obj.email);
console.log(obj.pass);
