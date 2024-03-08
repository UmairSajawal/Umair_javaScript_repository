// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);     //output = false
console.log(null == 0);    //output = false
console.log(null >= 0);    //output = true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// These types of comparason can make your code diificult and confused

/*
 == check
console.log("2" == 2)

=== checks strictly with datatypes, etc
console.log("2" === 2);
*/

console.log("2" == 2)   //output = true     because not srictly checked in this case
console.log("2" === 2)  // output = false   because srictly checked in this case