const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //array in array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //concate both array inthe form of one array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //better than concate()

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //infinity is depth. you can also use 1,2,etc.

console.log(real_another_array);
//the output of real_another_array is [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("umair"))       //isArray = is it array?
console.log(Array.from("umair"))          //convert into array
console.log(Array.from({name: "hitesh"})) // interesting and output is []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of() returns new set of elements and converts into array