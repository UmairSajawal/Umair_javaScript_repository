// .getOwnPropertyDescriptor()  // tell about hidden thing in object:

// console.log(Math.PI);  // output: 3.141592653589793
// Math.PI = 5
// console.log(Math.PI);  // output: 3.141592653589793, not override and remain same

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
/* output:
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,       
    configurable: false      
}
*/

// now make your own object:

// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,
// }
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))
/* output:
{
    value: 'ginger chai',
    writable: true,      
    enumerable: true,    
    configurable: true   
}
*/

// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,
// }
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))
// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* output
{
    value: 'ginger chai',
    writable: false,
    enumerable: false,
    configurable: true
}
*/

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}