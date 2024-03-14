// Dates
/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).*/

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


//Note: Months in javaScript are starts from 0 when it is single digit and when month is written in (dd-mm-yyyy) it starts from 1

// let myCreatedDate = new Date(2023, 0, 23)  //month start from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //5 and 3 are time
// let myCreatedDate = new Date("2023-01-14") //month start from 1 (dd-mm-yyyy)
let myCreatedDate = new Date("01-14-2023") //(mm-dd-yyyy)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //now() is used to get current time im miliseconds

// console.log(myTimeStamp);              //output in miliseconds 
// console.log(myCreatedDate.getTime());  //output in miliseconds start from the year you enter in obj

// console.log(Date.now()/1000)           //output in seconds when you divide by 1000 but one problem is held that gave output with decimals like 16716775486.068 so to sole this problem we use ceiling or floor method.

// console.log(Math.floor(Date.now()/1000)); //roundoff the value

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1); //+1 is make month start from 1
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

//press ctrl+space to display all properties of js
newDate.toLocaleString('default', {
    weekday: "long",
    
})

