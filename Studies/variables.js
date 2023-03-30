/**
*
* 
*
* 
*
/**
 * 
 * VARIABLES
 * 
 * 0: Variables are named containers that we can use to store primitive values such as strings, 
 * numbers, and booleans as well as addresses for complex values such as arrays, objects, and functions. 
 * We can declare a variable using 3 different declarative keywords (var, let, and const).
 * 
 * 1. Declaration and Assignment: To create a variable in JavaScript, it is best practice to first declare 
 * the variable using one of the 3 declarative keywords. At this point, the variable has a value of
 * undefined. Once declared, you can then assign the variable a value. (see code example (1) below)
 * 
 * 2. var, let, const: Variables declared with var are globally scoped, whereas variables declared
 * with let and const are block scoped. Variables declared with var and let can be reassigned to different
 * values, but variables declared with const cannot be reassisned. Variables assigned with let should
 * be given an initial value when they are declared. (see code example (2) below)
 * 
 * 3. Hoisting: Javascript hoists function and var declarations to the top of the scope they were created 
 * in, either the global scope or function scope. (see code example (3) below)
 * 
 */

// 1 // Declaration and assignment

var age; // variable age declared
age = 35; // variable 'assigned' value of 35

// 2 // var, let, const

var number = 10; // number is globally scoped
function addTwo(number) {
    var two = 2; // two is function scoped
    return number + 2;
}
if (5 > 1) {
    let count = 2; // count is block scoped
}
const length = 33; // length cannot be changed

// 3 // Hoisting

// var variable gets hoisted to top of global scope
console.log(fullName) // prints undefined, with no error
fullName = 'Mary Brown'; // var varibles can be used before they are declared
console.log(fullName); // prints Mary Brown
var fullName;

// var variable gets hoisted to top of function scope
function greeting(name) {
    french = 'Bonjour'; // var variables can be initialized before they are declared
    console.log(french + ' ' + name);
    var french;
}
greeting('Paul'); // prints Bonjour Paul

// functions can be used before they are defined
console.log(subtractFour(10)); // prints 6, with no error
function subtractFour(number) {
    return number - 4;
}

