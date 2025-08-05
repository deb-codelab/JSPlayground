// Variable Scope = where a variable is recognized and accesible (local or global).
let      x = 5;
var      y = 7;
const char = 'World';

function localScope() {
    let      x = 1;
    var      y = 3;
    const char = 'Hello';

    // Output: 1, 3 and Hello
    console.log(`localScope() ${x}, ${y} and ${char}`); 
}

function globalScope() {
    // Output: 5, 7 and World.
    console.log(`globalScope() ${x}, ${y} and ${char}`); 
}

function scopeAccess() {
    var     functionVar = 15;
    let     functionLet = 25;
    const functionConst = "Good";

    //The scope
    if(true) {
        var     blockVar = 10;
        let     blockLet = 20;
        const blockConst = "Morning";

        // Output: Within block scope 10, 20 and Morning
        console.log(`Within block scope ${blockVar}, ${blockLet} and ${blockConst}`); 

        // Output: Within function scope 15, 25 and Good
        console.log(`Within function scope ${functionVar}, ${functionLet} and ${functionConst}`);
    }

    console.log(`'var' 'blockVar' is accesible from outside the 'if' block scope: ${blockVar}`);

    try {
        console.log(blockLet); 
    } catch (err) {
        // Output: blockLet is not defined
        console.error("'let' 'blockLet' is NOT accesible from outside the 'if' block scope:", err.message);
    }

    try {
        console.log(blockConst); 
    } catch (err) {
        // Output: blockConst is not defined
        console.error("'const' 'blockConst' is NOT accesible from outside the 'if' block scope:", err.message); 
    }
}

localScope();
globalScope();
scopeAccess();