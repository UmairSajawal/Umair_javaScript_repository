class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }
}

class Teacher extends User{
    constructor (username, email, password){
        super(username)    // automatically fetch details like username and also no need to write this keyword.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A NEW COURSE ADDED BY ${this.username}`)
    }
}

const tea = new Teacher("SAJAWAL", "saj@example.com", "456");
tea.addCourse();

const coffee = new User("UMAIR")
coffee.logMe();

//console.log(tea === coffee)  //output: false
//console.log(tea === Teacher)  //output: false
console.log(tea instanceof Teacher)  //output: true
console.log(tea instanceof User)     //output: true