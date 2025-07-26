let myname = "AZ";
let myrealname = myname;
//stack memory
console.log("My name is " + myname);
console.log("My real name is " + myrealname);
myrealname = "Avez";
console.log("My name is " + myname);
console.log("My real name is " + myrealname);


//heap memory
let userone ={
    email : "user@gmail.com",
    name : "User One",
}
let usertwo = userone;
console.log("User One: " + userone.name);
console.log("User Two: " + usertwo.name); 

usertwo.name = "User Two";
console.log("User One: " + userone.name);
console.log("User Two: " + usertwo.name);
//userone and usertwo are pointing to the same object in memory
//changing usertwo also changes userone because they reference the same object
