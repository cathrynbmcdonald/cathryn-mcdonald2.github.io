/**
 * 
 * FUNCTIONS:
 * 
 * 0: Functions are a type of data that contain a reusable block of code that we can execute 
 *  whenever we want as often as we want.
 * 
 * 1. The two phases to using a function are: first declaration/definition: we must first define the function and 
 * second: invocation/calling/executing/applying: now we can use the function. (see code example (1) below)
 * 
 * 2. What's the difference between a function's parameters and arguments PASSED to a function?: A function's
 * parameters are the names in the function definition. The function's arguments are the real values passed into the function.
 * (see code example (2) below)
 * 
 * 3. What's the syntax for a NAMED function? (see code example (3) below)
 * 
 * 4. How do we assign a function to a variable? (see code example (4) below)
 * 
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs,
 * and how do we specify outputs? Inputs are specified with parameters and outputs are specified with return statements.
 * (see code example (5) below)
 * 
 * 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true. (see code example (6) below)
 * 
 * 7. Closures: Functions form closures around the data they house. If an object is returned from the function and is held
 *  in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (see code example (7) below)
 */

// 1 // Function Definition and Execution

// definition
function add(numOne, numTwo) { // function add takes in two numbers and adds them
    return numOne + numTwo;
}
// execution
let x = add(1, 4); // function add is called with arguments of 1 and 4; result of 5 is stored in x

// 2 // Function Parameters vs Arguments

// parameters
function subtract(numOne, numTwo) { // function subtract takes in two parameters, numOne and numTwo
    return numOne - numTwo;
}
// arguments
console.log(subtract(5, 2)); // function subtract is called with arguments of 5 and 2; prints 7

// 3 // Named Function

function multiply(numOne, numTwo) { // the function name is multiply
    return numOne * numTwo;
}

// 4 // Assign a function to a variable

let quotient = function (x, y) { // the memory address of the function is stored in the variable quotient
    return x / y;
}

// 5 // Function with and without inputs and output

// with inputs and output
function fullName(lastName, firstName) { // function fullName takes in two inputs: lastName and firstName
    return firstName + ' ' + lastName; // function fullName outputs value = firstName + ' ' + lastName
}
// without inputs or output
function printHello() { // function printHello has no input
    console.log('Hello'); // function printHello has no ouput
}

// 6 // Function Scope

// functions can see and modify variables in the global scope
var numberOfDays = 2; // numberOfDays is a globally scoped variable
function addDays(x) {
    return numberOfDays += x; // function addDays can see and modify the variable numberOfDays
}
console.log(addDays(5)); // prints 7

// global scope cannot see or modify variables in a function
function addThree(x, y, z) {
    var sumOfThree = x + y + z;
}
console.log(sumOfThree); // prints Reference Error: sumOfThree is not defined

// 7 // Closures

function greet(name) { // outer function
    function displayName() { // inner function
        return 'Hi' + ' ' + name; // variable name is from parent function scope
    }
    return displayName;
}

let innerFunction = greet('John');
console.log(innerFunction); // prints the inner function
console.log(innerFunction()); // prints Hi John