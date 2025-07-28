// function basic(){
//     console.log("hi");
//     console.log("hello");   
// }
// basic()

function add(n1,n2){
    return n1+n2;
}
// console.log("Addition: "+add(4,3));
const result = add(5,5);
console.log("Result: ",result);

// function user(name){
//     if (!name) {
//         console.log("please enter name");
//         return
//     }
//     else{
//     return `HEllo,${name}`}
// }

// console.log(user("srk"))

function calculateCartAmount(v1,v2,...n){ //rest operator for passing multiple arguments into a single parameter
    console.log(typeof n);
    return n;
}
console.log(calculateCartAmount(100,200,300,400,500));


const user = {
    username : 'srk',
    price: 100,
}
const {username:name} =user;
const {price:p} =user;
function handleObject(anyObject){
    console.log(anyObject.username,anyObject.price);
    // console.log(name,p);
}
// handleObject(user);
handleObject({
    username : 'srjk',
    price: 1000,
});

const myArr= [100,200,300,400,500];
function forArrEx(getArr){
    return getArr;
}
// console.log(forArrEx(myArr));
console.log(forArrEx([122,111,444,555]));