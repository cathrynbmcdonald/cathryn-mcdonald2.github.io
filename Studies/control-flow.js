/**
 * 
 * CONTROL FLOW
 * 
 * 0: Control Flow: Conditional statements allow us to control the flow of operations in javascript. We can use if
 * statements, if-else chains, and switch statements to make true or false decisions. 
 * 
 * 1. if: if statements can be used alone to create a branch or they can be used to start to start a conditional chain
 * of if-else statements. (see code example (1) below)
 * 
 * 2. else-if: after an if statement, we can then chain together any number of else-if statements. (see code example (2) below)
 * 
 * 3. else: we can add a default else statement to the end of the chain. (see code example (3) below)
 * 
 * 4. switch: The switch statement evaluates an input expression, matches the expression's value to one of the case 
 * clauses, and then executes statements associated with that case. A break statement ends each code block. (see code example (4) below)
 */

// 1 // if statement

var condition = 'red';
if (condition === 'blue') {
    console.log('blue'); // prints blue
}

// 2 // if-else-if chain

var condition = 'red';
if (condition === 'blue') {
console.log('blue');    
} else if (condition === 'red') {
    console.log('red'); // prints red
}

// 3 // if-else-if-else chain

var condition = 'yellow';
if (condition === 'blue') {
console.log('blue');    
} else if (condition === 'red') {
    console.log('red');
} else {
    console.log('neither'); // prints neither
}

// 4 // switch statement

let num = 3;
switch (num) {
  case 1:
    console.log('number is 1');
    break;
  case 2:
    console.log('number is 2');
    break;
  case 3:
    console.log('number is 3'); // prints number is 3
    break;
  default:
    console.log('number is greater than 3');
}