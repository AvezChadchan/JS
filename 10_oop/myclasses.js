// class User {
//     constructor(username, email, pass) {
//         this.username = username;
//         this.email = email;
//         this.pass = pass;
//     }
//     encryptPass() {
//         return `${this.pass}aaabc`;
//     }
//     changeUserName() {
//         return `${this.username.toUpperCase()}`;

//     }
// }
// const obj = new User('srk', 'srk@gmail.com', '123');
// console.log(obj.encryptPass());
// console.log(obj.changeUserName());

//behind the scenes

function User(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
}
User.prototype.encryptPass = function(){
        return `${this.pass}aaabc`;
}
User.prototype.changeUserName = function(){
       return `${this.username.toUpperCase()}`;
}
const mrtea= new User('mrtea','mrtea@gmail.com','1234');
console.log(mrtea.encryptPass());
console.log(mrtea.changeUserName());
