// Note: when you write or use 'get' it is necessary to use 'set'
// Note: not use same variable names of constructor in the  get{....} and set {...} {this.password...}
// but get ...() and set ...() here name write same as it in constructor
// Note: return is is important in 'get' but no write return in 'set'
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        //return this._password.toUpperCase()
        return `${this._password}ahmad`
    }
    set password(value){
        this._password = value
    }
}
const ahmad = new User("ahma@d.ai", "abc")
console.log(ahmad.email);