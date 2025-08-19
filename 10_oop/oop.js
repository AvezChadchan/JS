// const user = {
//     username : 'srk',
//     isLoggedIn : true,
//     loginCount: 5,
//     getUserDetails : function(){
//         console.log(this.username);
//     }
// }
// console.log(user);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,isLoggedIn,loginCount){
    this.username = username;
    this.isLoggedIn= isLoggedIn;
    this.loginCount=loginCount;
    this.greetings=function(){
        console.log(`Hello, ${this.username}`);
        
    }
     return this; //optional if we didn't write return it will auatomatically returns (implicitly)
}
const userOne = new User('srk',true,2); //new keyword - it generates an empty object
const userTwo = new User('hey',false,12);
console.log(userOne.constructor);
// console.log(userTwo);
