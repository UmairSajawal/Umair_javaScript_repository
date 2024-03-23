const user = {
    username: "umair",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // when use this it gives entire or complete output of object
    }
}
//this keyword is used to tell compiler that it is current content

// user.welcomeMessage()  //output= umair, wlecome to website  without using this
// user.username = "sam"  //change name successfully  
// user.welcomeMessage()  //output= sam, wlecome to website   without using this

// console.log(this);     //in node output is null and in search engine(console) output is windows

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // not work properly this keyword in function. this keyword properly work in objects
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()  //output is undefined


const chai =  () => {
    let username = "umair"
    console.log(this);
}


// chai()  //output is null if this.username output is undefined

// ()=>{} arrow function
// explicit return (arrow function)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return (arrow function), not use of parentheses {} and no need to write return keyword
//two method with () or without ()
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// return object in implicit arrow function
const addTwo = (num1, num2) => ({username: "umair"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()