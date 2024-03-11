const score = 400
// console.log(score);           //output = 400;

const balance = new Number(100)
// console.log(balance);         //output = Number:100

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  //decimal like 100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000  //increase readability like 1000000 to 1,000,000
// console.log(hundreds.toLocaleString('en-PK'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));     //Absolute convert onlu negative to possitive value
// console.log(Math.round(4.6));  //roundoff the vaue
// console.log(Math.ceil(4.2));   //choose upper value to roundoff like if value is 4.2 it converts into 5
// console.log(Math.floor(4.9));  //choose lower value to roundoff like if value is 4.7 it converts into 4
// console.log(Math.min(4, 3, 6, 8)); //find minimum value
// console.log(Math.max(4, 3, 6, 8)); //find maximum value

console.log(Math.random());  //the value of random() is automatically fixed between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)