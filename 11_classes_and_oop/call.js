function SetUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const tea = new createUser("Umair", "umair@example.com", "234");
console.log(tea);