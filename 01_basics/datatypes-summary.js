//  Primitive
//call by value
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["superman", "spiderman", "ironman"];
let myObj = {
    name: "umair",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// two types of memory
// stack (primitive), Heap (non-primitive)

//stack
let myYoutubeName = "code-with-umair";
let anotherYoutubeName = myYoutubeName;
anotherYoutubeName = "codeWithUmairSajawal";
console.log(myYoutubeName);
console.log(anotherYoutubeName);

//heap
let userOne = {
    name: "umer"
    email: "umer.123@gmail.com"
}
let userTwo = userOne
userTwo.email = "khuram.789@gmail.com"
console.log(userOne.email); 
console.log(userTwo.email); 
//output are same