function setUsername(username){
    this.username=username;
    console.log('called');
}
function createUser(username,email,pass){
    // setUsername(username); //only gave reference not called
    // setUsername.call(username); //calling the function explicitly but didn't supply execution context
    setUsername.call(this,username);//supplied the current execution context to that function so that it can take it and execute
    this.email=email;
    this.pass=pass;
}
const user = new createUser('srk','srk@gmail.com','123')
console.log(user);