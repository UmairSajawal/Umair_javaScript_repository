let score = "umair"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//convertion ___ to Number
// "33" => 33                //string to number
// "33abc" => NaN            
//  true => 1; false => 0    //Boolean to number

let isLoggedIn = "sajawal";

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// convertion ____ into Boolean
// 1 => true; 0 => false
// "" => false
// "sajawal" => true


// convertion number to string
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); /   //output = -3

// console.log(2+2);  Addition
// console.log(2-2);  Subtraction
// console.log(2*2);  Multiplication
// console.log(2**3); Power 2x2x2
// console.log(2/3);  Division
// console.log(2%3);  Remainder

let str1 = "hello"
let str2 = " umair"
let str3 = str1 + str2
// console.log(str3);  output = hello umair

// console.log("1" + 2);        output = 12
// console.log(1 + "2");        output = 12
// console.log("1" + 2 + 2);    output = 122    treat all with strings
// console.log(1 + 2 + "2");    output = 32     because rule of javaScript first add 1+2 and then add with "2"
// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  output = 1
// console.log(+"");    output = 0   because "" = 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2   //output = 4 num1 = 4,num2 = 4,num3 = 4

let gameCounter = 100
++gameCounter;  //prefix
gameCounter++;  //postfix
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
