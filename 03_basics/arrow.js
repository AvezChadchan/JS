const user = {
    username: "srk",
    price: 100,
    welcome: function () {
        console.log(`${this.username},Welcome!!`);
        console.log(this);

    }
}

// user.welcome()
// user.username ="mity"
// user.welcome()
// console.log(this);

//can't user 'this' inside a function to access the variable 

// function tp(){
//     const user='hi'
//     console.log(this.user);

// }
// tp(); //undefined

// const t1 =function(){
//     const user =1;
//     console.log(this.user);

// }
// t1() //undefined

const myArrowFunc = () => {
    const user = 1;
    // console.log(this.user); same as above
    console.log(this); //but in arrow function we can write this 'this' but not in normal function if we write 'this' in normal then it gives a every function parameters which is(built in) but if we write 'this' in arrow function then it will give empty object in result
}
// myArrowFunc()

// const addition = (n1, n2) => {  //explicit return from function
    return n1 + n2;
// }
console.log(addition(5, 5));

// const addition = (n1,n2) => n1+n2; //implicit return from function or can use (n1+n2) // const addition = (n1,n2) => (n1+n2);

const addition = () => ({username : "srk"}); //if want object in return 
console.log(addition())