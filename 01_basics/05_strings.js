const name = "umair"
const repoCount = 50

// console.log(name + repoCount + " Value");  //concactenate

//string interpulation
//use of Backtics instead of "" is better
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('umair-us-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) //use negative
console.log(anotherString); //print letters

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//remove extra spaces 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //replace %20 to -

console.log(url.includes('sundar'))// for searching if word match so output is true

console.log(gameName.split('-')); //for seperation
//Read MDN-Docs for more 