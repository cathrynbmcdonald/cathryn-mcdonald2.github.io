/**
 * 
 * DATA TYPES:
 * 
 * 0: Data Types are how we categorize different types of data in JavaScript. They have some unique and shared
 * properties between them and they allow the JavaScript interpreter to effectively work with different types of data.
 * 
 * 1. Number: numeral value or numeric data
 * 
 * 2. String: collection of characters between quotes or character data
 * 
 * 3. Boolean: holds the value true or false to handle logic
 * 
 * 4. Array: collection of values as a list or indexed list []
 * 
 * 5. Object: collection of key-value pairs or keyed collections {}
 * 
 * 6. Function: performs actions on data and returns them 
 * 
 * 7. undefined: undefined values, no-value, not initialized
 * 
 * 8. null: used to denote the absence of value, no-value, intentionally nullified by a programmer
 * 
 * 9. NaN: a numeral type which stands for Not a Number
 * 
 * 10. Infinity and -Infinity:
 * 
 * 11. What is the difference between primitive/simple and complex data types?: Operations on primitive values return more orimitive 
 * 
 * 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.
 * What does that mean, and how are they different?:
 * 
 */

// 1 // Number
var age = 5;

// 2 // String
var name = 'Cathy';

// 3 // Boolean
var bool = true;

// 4 // Array
var myArray = [1, 3, 5];

// 5 // Object
var myObject = {
    one: 'a', 
    two: 'b'
}

// 6 // Function
function doSomething(z) {
    z += 1;
}

var a = 1;
doSomething(a);

// 7 // undefined

// 8 // null

// 9 // NaN

// 10 // Infinity and -Infinity

// 11 // What is the difference between primitive/simple and complex data types?:

// 12 // Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.
// What does that mean, and how are they different?:
