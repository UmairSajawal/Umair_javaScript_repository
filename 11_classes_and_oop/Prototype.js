// let myName = "umair";
// console.log(myName.length); //output: 5

// let myName2 = "talha       ";
// console.log(myName2.length); //output: 12 , because space also count

// console.log(myName2.trueLength)  //output: undefined

let myHeroes = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is : ${this.spiderman}`)
    }
}

Object.prototype.umair = function(){
    console.log(`Umair is present in all objects`);
}
//check through object(heroPower):
//heroPower.umair();   //output: Umair is present in all objects
//check through array(myHeroes):
//myHeroes.umair();    //output: Umair is present in all objects

Array.prototype.heyUmair = function(){
    console.log("Umair says hello")
}
myHeroes.heyUmair()   //output: Umair says hello
// heroPower.heyUmair();    // output: TypeError: heroPower.heyUmair is not a function

// Inheritance:

const User = {
    name: "Ahmed" 
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User
// modern syntax:
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Sajawal     ";
String.prototype.trueLength = function(){
    console.log(`${this}`);   //output: Sajawal
    console.log(`True length is : ${this.trim().length}`);  //output: True length is : 7
}
anotherUsername.trueLength();
/*output:   Sajawal           
            True length is : 7 
*/
"Umer".trueLength();    
/*output:   Umer
            True length is : 4 
*/

"iceTea".trueLength();  
/*output:   iceTea
            True length is : 6
*/