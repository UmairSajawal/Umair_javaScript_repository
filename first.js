/*et btn = document.createElement("button");
btn.innerText = "Click Me!";
btn.style.backgroundColor= "red";
btn.style.color = "white";

let body = document.querySelector("body");
console.dir("body");
body.prepend(btn);*/

/*
let modbtn= document.querySelector("#btn");
let curMode = "light";
modbtn.addEventListener("onmouseover", () => {
    if(curMode === "light"){
        curMode = "dark";
        document.querySelector("body").style.backgroundColor= "black";
    }else{
        curMode = "light";
        document.querySelector("body").style.backgroundColor= "white";
    }
    console.log(curMode);
});
*/
/*
let modeBtn = document.querySelector("#btn");
let curMode = "light";
modeBtn.addEventListener("onmouseover", () => {
    if(curMode === "light"){
        curMode = "dark";
        document.querySelector("body").style.backgroundColor= "black";
    }else{
        curMode = "light";
        document.querySelector("body").style.backgroundColor= "white";
    }
});*/
/*
function DATA(getData, nextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log("Data is :", getData);
            //resolve("successful");
            reject("error sorry");
            if(nextData){
                nextData();
            }
        },7000);
    })
}


const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("successful");
        reject("error display");
    })
}
let promise = getPromise();
promise.then((res) => {
    console.log("Promise Fulfilled", res);
})
promise.catch((err) => {
    console.log("error returned", err);
})
*/
/*
function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1");
            resolve("successfull");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2");
            resolve("successfull");
        },4000);
    });
}
console.log("Fetching Data1...");

    asyncFunc1().then((res) => {
    console.log(res);
    console.log("Fetching Data2...");
    asyncFunc2().then(() => {
        console.log(res);    
    })
});
*/
/*
const URL = "https://cat-fact.herokuapp.com/facts";
const paraFact = document.querySelector("#para");
const button = document.querySelector("#btn");
const getData = async () => {
    let response = await fetch(URL);
console.log(response);
let data = await response.json();
paraFact.innerText = data[1].text;
};
btn.addEventListener("click", getData);
*/



