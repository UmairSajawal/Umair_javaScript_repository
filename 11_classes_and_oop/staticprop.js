class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS : ${this.username}`)
    }
    createId(){
        return "123";
    }
}
const umair = new User("Umair")
//console.log(umair.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());