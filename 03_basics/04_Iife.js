// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //semicolon is must write when used two iifee

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

