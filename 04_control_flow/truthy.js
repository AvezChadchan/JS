const userEmail =[]
if (userEmail.length === 0) {
    console.log("Email is required");
}
const empObj = {}
if (Object.keys(empObj).length===0) {
    console.log("Object is empty");
}

//falsy values :-  false,0,-0, BigInt 0n,"",null,undefined
//truthy values -: true , 1, "0", "false" , "somthing written",[],{},function(){}

// null coalescing operators (??) : null undefined

let val1;
// val1 = 10??5;
// val1 = null??5;
// val1 = 5??null;
val1 = undefined??null ??103

console.log(val1);

//terniary operator

// condition ? true :false
const rate =100;
rate >=75 ? console.log("pass") : console.log("fail");
