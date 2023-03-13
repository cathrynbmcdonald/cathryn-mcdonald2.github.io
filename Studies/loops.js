/**
 * 
 * LOOPS:
 * 
 * 0: Loops are features of JavaScript 
 * 
 * 1: Explain while, for, and for-in loops:
 * 
 * 2. Be able to loop any number of times, forward counting up to some limit,
 * backward counting down to some limit:
 * 
 * 3. Loop over an Array, forwards and backwards:
 * 
 * 4. Loop over an Object:
 * 
 */

// 1 // The while Loop

var count = 1;
while (count < 10) {
    console.log(count);
    count++;
}

// 2 // The for loop counting forward

var names = ['Sam', 'Mary', 'William']
for (var index = 0; index < names.length; i++) {
    console.log(names[index]); // prints array values forwards 
}

// 3 // The for loop counting backwards

var names = ['Sam', 'Mary', 'William']
for (var index = names.length - 1; i >= 0; i--) {
    console.log(names[index]); // prints array values backwards
}
// 4 // The for-in loop

var person = {name: 'Sam', age: 64}
for (var key in person) {
    console.log(person[key]);// note: key is a variable so it requires bracket notation
}