//creation of promise
const pormiseOne = new Promise(function (resolve, reject) {  //resolve is conected to .then, first have to call resolve() funnction then it will be connectd to .then()
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve(); //calling resolve to make the connection
    }, 1000)
});
console.log(pormiseOne);

//consuming promise 
pormiseOne.then(function () /*it automatically takes the arguments without passing,which takes the returned value from promise function like our setTimeout above function*/ {
    console.log('Promise consumed');
});

//or without storing promise into a variable

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(() => console.log('async 2  resolved')
);


//
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "me", email: "me@example.com " });  //parameter passed from resolve automatically goes to thens inner function
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
});

//then().then() = known as then chaining
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "srk", password: "123" })
        } else {
            reject('ERROR: Something is Wrong');
        }
    }, 1000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;

})/*then chaining */.then((name) => {
    console.log(name);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'));

//async await
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'javascript', pass: '1234' });
        } else {
            reject('Error:JS went Wrong')
        }
    }, 1000)
});
async function consumePromiseFieve() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFieve()