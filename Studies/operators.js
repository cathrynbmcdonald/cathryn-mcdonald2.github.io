/**
 * 
 * OPERATORS:
 * 
 * 0: Operators act on javascript data. They assign data to variables, compare data, and use data in arithmetic operations.
 * 
 * 1. Assignment operators: operators such as =, +=, and -= are assisgnment operators that assign values to variables.
 *  (see code example (1) below)
 * 
 * 2. Arithmetic operators: operators such as +, -, *, and / are arithmetic operators that perform mathematical operations
 *  on numbers. (see code examples (2) below)
 * 
 * 3. Comparison operators: operators such as <, >, and == are comparison operators that compare two values and evaluate 
 *  to either true or false. Strict operators take into account both value and type, whereas loose operators only take value
 *  into account. (see code examples (3) below)
 * 
 * 4. Logical opertors: && is a logical 'and' operator that requires two conditions to both be true; || is a logical 'or' 
 * operator that requires at least one of two conditions to be true, and ! is a logical 'bang' or 'not' operator that negates
 *  a logical value. (see code example (4) below)
 * 
 * 5. Unary operators: operators such as !, typeOf, -, ++, and -- take only one operand. (see code example (5) below)
 * 
 * 6. Ternary operators (a ? b : c): operator that take three operands and can be used as an alternative to a if.. else statement.
 * (see code example (6) below)
 * 
 */

// 1 // Assignment Operators

var age = 10;
console.log(age); //prints 10
age += 5;
console.log(age); // same as age = age + 5; prints 15
age *= 2;
console.log(age); // same as age = age * 2; prints 30
age /= 3;
console.log(age); // same as age = age / 3; prints 10
age %= 2;
console.log(age); //same as age = age % 2; prints 0

// 2 // Arithmetic Operators

var age = 30;
console.log(age); // prints 30
console.log(age + 5); // prints 35
console.log(age - 5); // prints 25
console.log(age * 5); // prints 150
console.log(age / 5); // prints 6
console.log(age % 5); // prints 0

// 3 // Comparison Operators

// Greater Than and Less Than
let age = 18;
if (age >= 21) {
    console.log('adult');
}
if (age <= 21) {
    console.log('minor'); // prints minor
}
// Loose Comparison Operator
var age = '18';
if (age == 18) { // values match even though data types do not
    console.log('minor'); // prints minor
}
// Strict Comparison Operator
var age = '18';
if (age === 18) { // values match but data types do not
    console.log('minor'); // prints nothing
}

// 4 // Logical Operators

// Logical 'and' operator 
var x = 2;
var y = 3;
if (x === 2 && y === 3) { // both conditions are true
    console.log('true'); // prints true
}
// Logical 'or' operator 
var x = 2;
var y = 3;
if (x === 2 || y === 5) { // only one condition is true
    console.log('true'); // prints true
}
// Logical 'bang' Operator 
var x = false;
if (!x) { // !x is true
    console.log('hello'); // prints hello
}

// 5 // Unary Operators

// - operator
let x = 2;
console.log(-x) // prints -2
// ! operator
let y = true;
console.log(!y); // prints false
// ++ operator
x++
console.log(x); // prints 3
console.log(typeof y); // prints boolean


// 6 // Ternary Operators
function drink(age) {
    return age >= 21 ? 'beer' : 'juice';
}
console.log(drink(8)); // prints juice
console.log(drink(25)); // prints beer