class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is: ${this.username}`);

    }
}
class Teacher extends User {
    constructor(username, email, pass) {
        super(username); //used to acces parent class's parameterized constructor
        this.email = email;
        this.pass = pass;
    }
    addCourse() {
        console.log(`A new Course is added by ${this.username} Teacher.`);
    }
}

const obj = new Teacher('srk','srk@gmail.com','1234');
// console.log(obj);
obj.addCourse()
