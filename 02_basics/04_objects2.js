// const twiterUser = new Object()  //singleton 
const twiterrUser = {}             //non-singleton

twiterUser.id = "123abc"
twiterUser.name = "Sammy"
twiterUser.isLoggedIn = false

// console.log(twiterrUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {           //Nested object (object in object)
        userfullname: {
            firstname: "umair",
            lastname: "sajawal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} (target), obj1, obj2, obj4 (sources) all sources give or push to target
// for combining two or more objects use assign() method

const obj3 = {...obj1, ...obj2} //...(spread operator)
// console.log(obj3);
// for combining two or more objects use ...(spread method) method and this method is easy, simple and latest


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));    //output in array form
// console.log(Object.values(tinderUser));  //values
// console.log(Object.entries(tinderUser)); //array in array like [[key: value],[key: value],...]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  
//output in boolean form (true or false)
//ask qeestion to js is with using hasOwnProperty that the key or variable is available or not?


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {                      //JSON method
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//JSON API
[                //Array
    {},         //Object
    {},
    {}
]

//JSON formater or other many tools used for reding API documents or data in simple and easy form