function createUser(username,score){
    this.username= username;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printme=function(){
    console.log(`Hello ${this.username}`);
    
}
const firstobj = new createUser('srk',10)
const secondobj = new createUser('nan',10)
secondobj.printme()
console.log(firstobj);
