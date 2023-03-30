/**
 * 
 * STRING MANIPULATION:
 * 
 * 0: String Manipulation: String variables are immutable, however, we can manipulate them with various
 * operators.
 * 
 * 1. With operators: Javascript strings can be concatenated with either the + or += operator (see code example (1) below)
 * 
 * 2. With string methods: Javascript strings can also be manipulated with built-in string methods such as slice and concat. 
 * (see code example (2) below)
 */

// 1 // String manipulation with operators

// + operator
let firstName = 'John';
let lastName = 'Smith';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // prints John Smith
// += operator
let greeting = 'hello';
greeting += '!';
console.log(greeting); // prints hello!

// 2 // String manipulation with string methods

// .slice
let flavor = 'strawberry';
console.log(flavor.slice(5)); // prints berry
// .concat
let string1 = 'blue';
let string2 = 'berry';
console.log(string1.concat(string2)); // prints blueberry
