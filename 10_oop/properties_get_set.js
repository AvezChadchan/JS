function User(email, pass) {
    this._email = email;
    this._pass = pass;
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });
    Object.defineProperty(this, 'pass', {
        get: function () {
            return this._pass;
        },
        set: function (value) {
            this._pass = value;
        }
    });
}
const OBJ = new User('srk@gmail.com', '123232')
console.log(OBJ.email);
