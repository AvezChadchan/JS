// let myName = 'srk'
// console.log(myName.trueLength);

let myHeroes= ['cap','thor','spidy']
let heroPower = {
    cap:'shield',
    thor:'lighting',
    spidy:'webshooters',
    getSpidyPower : function(){
        console.log(`Spidy power is: ${this.spidy}`);
    }
}
// object->array,function,string
Object.prototype.srk = function(){ //adding a new function to all the objects:- arrrays,objects,
    console.log(`Srk function is present in all objects`);   
}
//checking array->object //result= not applicable
Array.prototype.heySrk = function(){
    console.log(`Hey, SRK`);
}
// myHeroes.heySrk()
// heroPower.heySrk()
// myHeroes.srk() 
// heroPower.srk() not working

//inheritance

const user={
    name:'mrtea',
    email:'mrtea@gmail.com'
}
const Teacher={
    makeVieo:true,
}
const Teaching={
    isAvailable:false,
}
const TASupport={
    makeAssignment: 'JS assignment',
    fullTime:false,
    __proto__: Teaching,
}

Teacher.__proto__=user;
//modern syntax
Object.setPrototypeOf(Teaching,Teacher);
// console.log(TASupport);


//creating custon function for string
let anotherUsername= 'Abcd     '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
// 'hello   '.trueLength()