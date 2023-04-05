/**
 * 
 * LOOPS:
 * 
 * 0: Loops allow us to execute a block of code as many times as needed. They allow us to work 
 *  with the values of an array or object one by one. 
 * 
 * 1: Explain while, for, and for-in loops:  
 * While loops iterate over a code block while a specified condition is true. 
 * For loops iterate over a code block a number of times by using three statements:
 * (1) start statement - sets the index to an initial value
 * (2) stop statement - sets a true/false condition under which the loop will continue as long as the condition is true
 * (3) update statement - increments or decrements the index after each loop
 * For-in loops iterate over the keys of an object.  
 * 
 * 2. Be able to loop any number of times, forward counting up to some limit,
 * backward counting down to some limit: (see code example (1) below)
 * 
 * 3. Loop over an Array, forwards and backwards: (see code example (2) below)
 * 
 * 4. Loop over an Object: (see code examples (3) below)
 * 
 */

// 1 // While Loop 

// counting up
var count = 1;
while (count <= 5) {
    console.log(count); // prints 1, 2, 3, 4, 5
    count++;
}

//counting down
var count = 5;
while (count >= 1) {
    console.log(count); // prints 5, 4, 3, 2, 1
    count--;
}

// 2 // For Loop

// loop forwards with for loop counting forwards
var names = ['Sam', 'Mary', 'William']
for (var i = 0; i < names.length; i++) {
    console.log(names[i]); // prints Sam, Mary, William
}

// loop backwards with for loop counting backwards
var names = ['Sam', 'Mary', 'William']
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]); // prints William, Mary, Sam
}

// 3 // For-in loop
var person = {name: 'Sam', age: 64}
for (var key in person) {
    console.log(key); // prints name, age
    console.log(person[key]);// prints Sam, 64 *** note *** key is a variable so it requires bracket notation
}