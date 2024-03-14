//(paranthesis), {brackets}, [braces]
// array

//const myArr = [0, 1, 2, 3, 4, 5, true,'umair'] //you can also add numbers, boolean, strings, etc in one array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["superman", "ironman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  //add value at last
// myArr.push(7)
// myArr.pop()    //automatically remove value at the last

// myArr.unshift(9)   //add value on the first
// myArr.shift()      //remove value on the first

// Question Answer with js
// console.log(myArr.includes(9)); // includes is used to now is number is available or not?
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()     // join() change the type of arr and bind them 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // print from index 1 to 2, (3 is not include) last range not include in slice() method

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // if array =[0,1,2,3,4,5] so if i use splice(1,3) the result is that original result is change like [0,4,5] and the output of splice(1,3) is [1,2,3]
console.log("C ", myArr);
console.log(myn2);
