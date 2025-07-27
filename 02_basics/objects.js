//singleton
//-> Object.create

//object literals
// const mySym = Symbol('mySymbol');
// const jsuser = {
//     name : "John",
//     age:20,
//     [mySym]: "This is a symbol property",
//     location: "India",
//     email: "john@example.com",
//     isLoggedIn: false,
//     lastLoginDays: ['Monday', 'Tuesday', 'Wednesday'],    
// };

// console.log(jsuser.email); // Accessing properties using dot notation
// console.log(jsuser['email']); // Accessing property using bracket notation
// console.log(jsuser[mySym]); // Accessing symbol property 

// Object.freeze(jsuser); // Prevents any changes to the object
// jsuser.name = "Doe"; // This will not change the name property
// console.log(jsuser);

// jsuser.greeting = function(){
//     console.log(`Hello, I'm ${this.name}`); // Adding a method to the object
// }
// jsuser.greeting(); // Calling the method
// console.log(typeof jsuser.greeting); // Checking the type of jsuser


// const myuser = new Object(); // Creating an empty object // creates a singleton object
// console.log(myuser); // Logging the empty object

const myuser = {} //doesn't create a singleton object, just an empty object
myuser.id ='123myid';
// myuser.name = 'John Doe';
// console.log(myuser); // Logging the empty object

myuser.isLoggenIn = false;
const newuser = {
    email: "abc@example.com",
    fullname: {
        userfullname: {
            firstname: "John",
            lastname: "Doe"
        },
        samplename: {
            name: "Sample Name"
        }
    },
}
console.log(newuser.fullname.userfullname.firstname); // Accessing nested object properties
console.log(Object.keys(newuser)); // Getting keys of the newuser object
console.log(Object.values(newuser)); // Getting values of the newuser object
console.log(Object.entries(newuser)); // Getting key-value pairs of the newuser object
const obj1 ={1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};
// const obj3 = Object.assign({}, obj1, obj2); // Merging two objects using Object.assign
const obj3 = {...obj1, ...obj2}; // Merging two objects using spread
console.log(obj3); // Logging the merged object

console.log(newuser.hasOwnProperty('email')); // Checking if the property exists in the object