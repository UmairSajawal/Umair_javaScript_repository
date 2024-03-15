// singleton
// Object.create

// object literals

const mySym = Symbol("key1") //syntax of symbol


const JsUser = {
    name: "Umair",
    "full name": "Umair Sajawal",
    [mySym]: "mykey1",       //syntax of symbol write in square brackets
    age: 18,
    location: "Sialkot",
    email: "umair@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])  //square notation method and output is same if compare to upper line of code

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])   //syntax of symbol write in square brackets

JsUser.email = "umair@chatgpt.com"  //change email through object
// Object.freeze(JsUser)  //Not access to change name or email etc
JsUser.email = "umair@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);      //output provide function reference
console.log(JsUser.greeting());    //output a it is
console.log(JsUser.greetingTwo()); //output a it is