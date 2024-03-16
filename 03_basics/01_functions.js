/*
function sayMyName(){
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("I");
    console.log("R");
}
sayMyName()
*/
// function addTwoNumbers(number1, number2){   //parameters

//     console.log(number1 + number2);
// }
//addTwoNumbers(3,4) //arguments
//const result = addTwoNumbers(3, 5)  //output = undefined because return value

/*
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result                  //method 1
    return number1 + number2          //method 2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);
*/
/*
function logUsrMsg(usrrname){
    return `${username} just usernname logged in`
}
console.log(loginUserMessage("umair"))
*/
/* +++++++ method 1 with usin if condition +++++++++
function loginUserMessage(username = "ali"){
    if(!username === undefined){   //check message with if condition
        console.log("PLease enter a username");
        return       // no value return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("umair"))
// console.log(loginUserMessage())  //output = undefined not null
*/

/*  +++++++ method 2 with usin if condition +++++++
function loginUserMessage(username = "sam"){
    if(!username){   // undefined. (!)convert true to false and false to true
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("umair"))
// console.log(loginUserMessage("umair"))
*/

/*
//  ++++++ shopping cart ++++++
function calculateCartPrice(...num1){  //(...) rest or spread operator. there are some situations when it is called rest operator and spread operator
//... operator converts one variable into pack of bundle you can write one variable and use bundle of varialble with ... operator  

    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
//output in array = [200, 400, 500, 2000]
*/

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// output = [400, 2000] because 200 move into val1, 400 move into val2, and 500 and 2000 are stored in (...)num1

/*
//how to use object in function
const user = {
    username: "umair",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
*/

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));