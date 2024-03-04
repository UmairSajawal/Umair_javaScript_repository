const accountId = 44568
let acoountEmail = "abc.123@gmail.com"
var accountPassword = "02878"
accountCity = "sialkot"
/* variable is declared without keyword(let, var, condt) and make space in memory but it is not good way. Avoid */

let accountState; // undefined

// var is used function scoped and let is used for block scope{}
// accountId = 2 not allowed due to const keyword

accountEmail = "umair@gmail.com"
accountPassword = "024689"
accountCity = "Islamabad"
console.log(accountEmail)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])