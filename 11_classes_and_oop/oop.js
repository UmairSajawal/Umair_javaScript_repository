const user = {
    username: "Umair",
    loginCount: 8,
    signedIn: true,
    getUserDetail: function(){
        // console.log("Got user's detail from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetail());
//console.log(this) //output: {}

/*
// const promiseOne = new Promise(); // Note: 'new' called constructor function
// const date = new Date();
*/

function User(username, loginCount, isLoggedIn){
    this.username = username      // Note: this.username is a variable.
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this;
};
/*
const userOne = User("Umair", 12, true);
const userTwo = User("Ahmed", 11, false);
console.log(userOne);

In output print the all values of userTwo
but we console.log(userOne)
because userOne override their values
That is why, we use constructor function 'new'.
Solution:
*/
const userOne = new User("Umair", 12, true);
const userTwo = new User("Ahmed", 11, false);
console.log(userOne); // Output: User { username: 'Umair', loginCount: 12, isLoggedIn: true }
console.log(userTwo); // Output: User { username: 'Ahmed', loginCount: 11, isLoggedIn: false }

//console.log(userOne.constructor);

// read mdn docs about instanceof operator