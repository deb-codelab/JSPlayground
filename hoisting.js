// Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

/*******************************
 *         Example -1          *
 *******************************/
// Variable Hoisting
hoistedVariable = 3;
console.log("hoistedVariable:", hoistedVariable); // Outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

/*******************************
 *         Example -2          *
 *******************************/
// Outputs "Hello world!" even when the function is declared after calling
hoistedFunction();
function hoistedFunction(){ 
  console.log("Hello world!");
} 

/*******************************
 *         Example -3          *
 *******************************/
// Hoisting takes place in the local scope as well
const localScopeHoisting = () => {
  x = 33;
  console.log("localScopeHoisting:", x); // Output: 33
  var x;
}; 
localScopeHoisting();

/*******************************
 *         Example -4          *
 *******************************/
// Note - Variable initializations are not hoisted, only variable declarations are hoisted.
var x;
console.log("Initialization of 'x' is not hoisted", x); // Outputs "undefined" since the initialization of "x" is not hoisted.
x = 23;

/*******************************
 *         Example -5          *
 *******************************/
// Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code.
// "use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 
