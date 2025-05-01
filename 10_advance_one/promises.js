const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
//1st method:

    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 2000);
});

 // then() is directly connected with 'resolve()'.
promiseOne.then(function() {      
    console.log('Promise consumed')
});

//2nd method without store in variable:
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 2000);
}).then(function(){
    console.log("Async task resolved");
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "umair", userEmail: "umair@example.com"});
    }, 2000);
});
promiseThree.then(function(user){
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true;
        if(!error){
            resolve({username: "Umair", password:"123"});
        } else{
            reject("Something went wrong");
        }
    }, 2000);
})
promiseFour
.then((user) => {
    console.log(user)
    return(user.username);
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected")); //.finally() runs compulsory

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
            let error = true;
            if(!error){
                resolve({username: "javaScript", password:"123"});
            } else{
                reject("ERROR: JS went wrong");
            }
        }, 2000);
});

// Note: async await not able to handle errors directly. 
// Note: if error = false then output is '{ username: 'javaScript', password: '123' }'
// Note: if error = true without using try() and catch(), then output provide error.
// Note: if error = true with using try{}catch(){}, then runs reject(...) successfully

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response);
// }
// consumePromiseFive(); 
async function consumePromiseFive(){
    try{
    const response = await promiseFive;
    console.log(response);
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive();

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log("E:", error)
    }
}
getAllUsers();


// Important Note: fetch() always execute firstly, then executes other tasks like setTimeout(), ....,etc.
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.
