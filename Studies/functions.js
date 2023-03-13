/**
 * 
 * FUNCTIONS:
 * 
 * 0: Functions are a type of data that contain reusable code.
 * 
 * 1. The two phases to using a function are: first declaration/definition: we must first define the function and 
 * next: invocation/calling/executing/applying: now we can use the function 
 * 
 * 2. What's the difference between a function's parameters and arguments PASSED to a function?:
 * 
 * 3. What's the syntax for a NAMED function?:
 * 
 * 4. How do we assign a function to a variable?: 
 * 
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs,
 * and how do we specify outputs?
 * 
 * 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 * 
 * 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held
 *  in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures!
 */

// 1 // Function Definition
function add(numOne, numTwo) {
    return numOne + numTwo;
}

// 2 // Function Call
console.log(add(1, 4)); // prints '5' to the console