/**
 * 
 * DATA TYPES:
 * 
 * 0: Javascript has eight data types. Numbers, strings, and booleans are primitive data types which means 
 * they have a fixed size and their values are stored directly in the variable. Array, objects, functions, and 
 * dates are complex data types which means their size is indefinite and only a memory address is stored in the variable. 
 *  
 * 
 * 1. Number: numeral value (see code example (1) below)
 * 
 * 2. String: series of characters between quotes, either single or double (see code example (2) below)
 * 
 * 3. Boolean: can only have one of two values, true or false, used to handle logic (see code example (3) below)
 * 
 * 4. Array: collection of values as a list or indexed list, written with []; array elements are separated by commas. 
 * Arrays are zero-indexed, which means the first element is at index [0], the second is at index [1], and so on. 
 * (see code example (4) below)
 * 
 * 5. Object: collection of key-value pairs or keyed collections, written with {}. (see code example (5) below)
 *  
 * 6. Function: performs actions on data and returns them. (see code example (6) below)
 *  
 * 7. undefined: undefined values, no-value, not initialized. (see code example (7) below)
 * 
 * 8. null: used to denote the absence of value, no-value, intentionally nullified by a programmer. (see code example (8) below)
 * 
 * 9. NaN: a numeral type which stands for Not a Number. (see code example (9) below)
 * 
 * 10. Infinity and -Infinity: Infinity is the upper limit for a javascript number (1.797693134862315E+308) and -Infinity is the
 * lower limit for a javascript number (-1.797693134862315E+308). (see code example (10) below)
 * 
 * 11. What is the difference between primitive/simple and complex data types?: primitive data types have a fixed size and their 
 * values are stored directly in the variable whereas complex data types have an indefinite size and only a memory address is stored 
 * in the variable. (see code example (11) below)
 * 
 * 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.
 * What does that mean, and how are they different?: when we assign a primitive value from one variable to another, javascript creates
 * a separate independent copy, however, when we assign a complex value from one variable to another, javascript only creates another 
 * reference to the memory address where the complex data value is stored. (see code example (12) below)
 * 
 */

// 1 // Number

var age = 5; // numeric data

// 2 // String

var name = 'Cathy'; // string data

// 3 // Boolean

var bool = true; // boolean data

// 4 // Array

var myArray = [1, 3, 5]; // array of elements

// 5 // Object

var myObject = { // object with key/value pairs
    one: 'a', 
    two: 'b'
}

// 6 // Function

function addOne(z) { // function named addOne
    z += 1;
}
console.log(addOne(2)); // prints 3

// 7 // undefined

var a; // variables that aren't initialized are undefined

// 8 // null

let b = null; // variables can be set to null

// 9 // NaN

let x = 10
console.log(x * 'hello') // mismatched datat types prints NaN

// 10 // Infinity and -Infinity

let a = 1.797693134862315E+308;
console.log(x * 1.001); // prints Infinity
let b = -1.797693134862315E+308;
console.log(x * 1.001); // prints -Infinity

// 11 // Primitive vs Complex Data

var myNum = 9; // primitive data
var myObj = {name: 'Sally', age: 32}; // complex data

// 12 // Copy by Value vs Copy by Reference

// copy by value
let bool1 = true;
let bool2 = bool1;
bool1 = false;
console.log(bool2); // prints true

// copy by reference
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr2); // prints [1, 2, 3, 4]


