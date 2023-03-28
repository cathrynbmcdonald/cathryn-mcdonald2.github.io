'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identity: Function designed to take in a value and return the value unchanged.
 * 
 * @param {any value} value: Function takes in any value. 
 * @returns {any value} Function returns <value> unchanged.
 */

function identity(value) { // function takes in any <value>
    return value; // output is <value> unchanged
}
module.exports.identity = identity;

/**
 * typeOf: Function designed to take in a value and return the javascript type.
 * 
 * @param {any value} value: Function takes in any value. 
 * @returns {string} Function returns the javascript type of <value> as
 * a string.
 */

function typeOf(value) { // function takes in any <value>
    if (Array.isArray(value)) { // check to see if <value> is an array
        return 'array';
    } else if (value === null) { // check to see if <value> is null
        return 'null';
    } else if (typeof value === 'string') { // check to see if <value> is a string
        return 'string';
    } else if (typeof value === 'undefined') { // check to see if <value> is a undefined
        return 'undefined';
    } else if (typeof value === 'number') { // check to see if <value> is a number
        return 'number';
    } else if (typeof value === 'boolean') { // check to see if <value> is a boolean
        return 'boolean';
    } else if (typeof value === 'function') { // check to see if <value> is a function
        return 'function';
    } else if (typeof value === 'object') { // check to see if <value> is an object after checking for 
        // array and null
        return 'object';
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Function designed to take in an array and a number and return 
 * the first number of elements in the array.
 * 
 * @param {array} arrayP: Function takes in an array.
 * @param {number} numberP: Function takes in a number indicating the first 
 * number of elements in the <array> to return. 
 * @returns {array} Function returns a new array with the first <number> of
 * elements in <array>. If <array> is not an array, function returns []. If
 * <number> is not given, or is not a number, or negative, function returns just 
 * the first element of <array>. If <number> is greater than length of <array>,
 * function returns entire <array>.
 */

function first(arrayP, numberP) { // function takes in an <arrayP> and a <numberP>
    if (!Array.isArray(arrayP)) { //return [] if <array> is not an array
        return [];
    } else if (typeof numberP !== 'number') { //return first element if <numberP>
        // is not a number
        return arrayP[0];
    } else if (numberP < 0) { // return [] if <numberP> is negative
        return [];
    } else { // return first <numberP> elements of <arrayP>
        return arrayP.slice(0, numberP);
    }
}
module.exports.first = first;


/**
 * last: Function designed to take in an array and a number and return 
 * the last number of elements in the array.
 *
 * @param {array} arrayP: Function takes in an array.
 * @param {number} numberP: Function takes in a number indicating the last 
 * number of elements in the <array> to return. 
 * @returns {array} Function returns a new array with the last <number> of
 * elements in <array>. If <array> is not an array, function returns []. If
 * <number> is not given, or is not a number, or negative, function returns just 
 * the last element of <array>. If <number> is greater than length of <array>,
 * function returns entire <array>. 
 */

function last(arrayP, numberP) { // function takes in an <arrayP> and a <numberP>
    if (!Array.isArray(arrayP)) { //return [] if <array> is not an array
        return [];
    } else if (typeof numberP !== 'number') { //return last element if <numberP>
        // is not a number
        return arrayP[arrayP.length - 1];
    } else if (numberP < 0) { // return [] if <numberP> is negative
        return [];
    } else { // return last <numberP> elements of <arrayP> 
        return arrayP.slice(Math.max(arrayP.length - numberP, 0), arrayP.length);
    }
}
module.exports.last = last;

/**
 * indexOf: Function designed to loop over an array and return the 
 * first index of a specified value. If the value is not found in the
 * array, the function returns -1.
 * 
 * @param {array} array: Function takes in an array.
 * @param {any value} value: Function takes in a value to search for in <array>.
 * @returns {number} Function returns the first index of the specified value in
 * <array>. If the specified value isn't found, the function returns -1. 
 */

function indexOf(array, value) { // function takes in an <array> and a <value>
    for (let i = 0; i < array.length; i++) { // i = 0, 1, ... array.length - 1
        if (array[i] === value) { // if current array value = <value> return index
            return i;
        }
    }
    return -1; // if <value> isn't found, return -1
}
module.exports.indexOf = indexOf;


/**
 * contains: Function designed to loop over an array and return true if the 
 * specified value is found or false otherwise.
 * 
 * @param {array} array: Function takes in an array.
 * @param {any value} value: Function takes in a value to search for
 * in <array>.
 * @returns {boolean} Function returns true if specified value is found, or false 
 * if specified value is not found. Function also returns false if no 
 * <value> is given.
 */

function contains(array, value) { // function takes in an <array> and a <value>
    var bool;
    for (let i = 0; i < array.length; i++) { // i = 0, 1, ... array.length - 1
        bool = array[i] === value ? true : false; // bool = true if current value 
        // of <array> = <value>, else bool = false
        if (bool === true) { // if bool = true for any value of <array>, return true
            return true
        }
    }
    return false // if bool = false for all values of <array>, return false
}
module.exports.contains = this.contains;

/**
 * each: Function designed to loop over a collection, either array or object, and 
 * execute a callback function for each value in the collection.
 * 
 * @param {array or object} collection: Function takes in a collection, either
 * an array or an object.
 * @param {function} action: Function takes in a callback function to be 
 * executed on each value in <collection>.
 * @returns {undefined} Function returns undefined.
 * 
 */

function each(collection, action) { // function takes in a <collection> and a callback <action>
    if (Array.isArray(collection)) { // check to see if <collection> is array
        for (var i = 0; i < collection.length; i++) {
            i = 0, 1, collection.length - 1
            action(collection[i], i, collection); // execute <action> on each element
        }
    } else { // if <collection> is object
        for (var key in collection) { // iterate over collection
            action(collection[key], key, collection); //execute <action> on each property
        }
    } // no return statement
}
module.exports.each = each;

/**
 * unique: Function designed to loop over an array and return a new array
 * with all duplicates removed.
 * 
 * @param {array} array: Function takes in an array.
 * @returns {array} Function returns a new array with all of the elements 
 * of <array> excluding any duplicates.
 */

function unique(array) { // function takes in an <array>
    var newArray = []; // initialize output array
    for (let i = 0; i < array.length; i++) { // i = 0, 1, ... array.length - 1
        if (i === _.indexOf(array, array[i])) { // add current <array> element to 
            // output array if current <array> element is not a duplicate
            newArray.push(array[i]);
        }
    }
    return newArray; // return output array
}
module.exports.unique = unique;

/**
 * filter: Function designed to loop over an array and return a new array
 * with just the elements of the input array that pass a given test.
 * 
 * @param {array} array: Function takes in an array.
 * @param {function} func: Function takes in a test function to be
 * executed on each element in <array>. The test function returns either
 * truthy or falsy for each element. The parameters of the function are current
 * element of <array>, index, and <array>.
 * @returns {array} Function returns a new array with just the elements of the
 * input array that pass the test function with a truthy value.
 */

// function takes in <array> and <func> and returns new array with just the elements 
// that pass the test
function filter(array, func) { // function takes in array and test function
    if (Array.isArray(array) && typeof func === 'function') { //check to see if <array> is an
        // array and <func> is a function
        var passArray = []; // initialize array for elements that pass the test
        _.each(array, function (current, i, array) { // push array elements into test array if
            // they pass the test
            if (func(current, i, array)) { 
                passArray.push(current)
            }
        })
        return passArray; // return outut array
    }
}
module.exports.filter = this.filter;

/**
 * reject: Function designed to loop over an array and return a new array
 * with just the elements of the input array that fail a given test.
 * 
 * @param {array} array: Function takes in an array.
 * @param {function} func: Function takes in a test function to be
 * executed on each element in <array>. The test function returns either
 * truthy or falsy for each element.
 * @returns {array} Function returns a new array with just the elements of the
 * input array that fail the test function with a falsy value.
 */

// function takes in <array> and test <func> and returns new array with just the elements
// that fail the test
function reject(array, func) { // function takes in array and test function
    if (Array.isArray(array) && typeof func === 'function') { //check to see if <array> is an
        // array and <func> is a function
        var failArray = []; // initialize array for elements that fail the test
        _.each(array, function (current, i, array) { // push array elements into test array if
            // they fail the test
            if (!func(current, i, array)) {
                failArray.push(current)
            }
        })
        return failArray; // return output array
    }
}
module.exports.reject = this.reject;

/**
 * partition: Function designed to loop over an array and return a new array
 * with two sub arrays. The first sub array includes the elements of the input 
 * array that pass a given test and the second sub array includes the elements 
 * of the input array that fail a given test.
 * 
 * @param {array} array: Function takes in an array.
 * @param {function} func: Function takes in a test function to be
 * executed on each element in <array>. The test function returns either
 * truthy or falsy for each element.
 * @returns {nested array} Function returns a new array with a separate sub array for the
 * elements of the input array that passed the test and another for those that 
 * did not pass. 
 */

// function takes in <array> and <func> and returns a new nested array with elements
//  that pass the test in one sub array and elements that fail the test in another sub array 
function partition(array, func) { // function takes in array and test function
    if (Array.isArray(array) && typeof func === 'function') { //check to see if <array> is an
        // array and <func> is a function
        var passArray = []; // initialize array for elements that pass the test
        var failArray = []; // initialize array for elements that fail the test
        var nestedArray = []; // initialize nested output array 
        _.each(array, function (current, i, array) { // push array elements into pass or fail arrays if
            // they pass or fail the test
            if (func(current, i, array)) {
                passArray.push(current)
            } else {
                failArray.push(current)
            }
        })
}
        nestedArray.push(passArray, failArray); // push pass and fail arrays into nested array
        return nestedArray; // return output array
}
module.exports.partition = this.partition;

/**
 * map: Function designed to loop over a collection, either array or object, 
 * execute a callback function for each value in the collection, and return
 * a new collection of each value returned by the callback function. 
 * 
 * @param {array or object} collection: Function takes in a collection, either
 * an array or an object.
 * @param {function} func: Function takes in a callback function to be 
 * executed on each value in <collection>.
 * @returns {array} Function returns a new array with the values returned by 
 * <callback function> for each element or property in <collection>.
 */

// function takes in <collection> and <func> and returns new array of values returned by
// callback function <func> for each value in <collection>
function map(collection, func) { // function takes in <collection> and callback <func>
    var newArray = []; // initialize output array
    if (Array.isArray(collection)) { // check to see if collection is an array
        for (let i = 0; i < collection.length; i++) { // i = 0, 1, ... collection.length - 1
            newArray[i] = func(collection[i], i, collection); // current value of output array
            // = return value of callback function <func> executed on current <collection> value
        }
    } else {
        var i = 0; // initialize index for output array
        for (let key in collection) { // loop over keys in <collection>
            newArray[i] = func(collection[key], key, collection); // current value of output array
            // = return value of callback function <func> executed on current <collection> value
            i++ // increment index for output array
        }
    }
    return newArray // return output array
}
module.exports.map = this.map;

/**
 * pluck: Function designed to loop over an array of objects and 
 * return a new array with the specified property values of each object
 * in the input array.
 * 
 * @param {array of objects} array: Function takes in an array of objects.
 * @param {object key} property: Function takes in a specified property.
 * @returns {array} Function returns a new array with the <property> values
 * of each object in <array>.
 */

// function 
function pluck(array, property) { // function takes in <array> of objects and a <property>
    return _.map(array, function (value, index, array) { // map each object in <array> to its given property value
        return value[property]
    })
}
module.exports.map = this.map

/**
 * every: Function designed to loop over a collection, either an array or object, and
 * return true if every value in the collection passes a test function.
 * 
 * @param {array or object} collection: Function takes in a collection, either an
 * array or an object.
 * @param {function} func: Function takes in a test function to be executed
 * on each value in <collection>. The test function returns either
 * truthy or falsy for each element.
 * @returns Function returns true if the test function returns truthy for every
 * value in <collection>, or false otherwise. 
 */

// function 
function every(collection, func) { // function takes in a <collection> and a callback <func>
    //determine if func does not resolve to truthy
    if (!func) {
        //determine if array;
        if (Array.isArray(collection)) {
            //iterate
            for (let i = 0; i < collection.length; i++) {
                //determine if current value is not truthy
                if (!collection[i]) {
                    return false;
                }
            }
        } else {
            //iterate
            for (let key in collection) {
                //determine if current is not truthy
                if (!collection[key]) {
                    return false;
                }
            }
        }
    } else {
        //determine if array
        if (Array.isArray(collection)) {
            //iterate
            for (let i = 0; i < collection.length; i++) {
                // determine if func(current value) is not truthy
                if (!func(collection[i], i, collection)) {
                    return false;
                }
            }
        } else {
            // determine if func is not truthy
            for (let key in collection) {
                if (!func(collection[key], key, collection)) {
                    return false;
                }
            }
        }
    }
    return true; // return true if <func> returns true for every value in collection
}
module.exports.every = this.every;

/**
 * some: Function designed to loop over a collection, either an array or object, and
 * return true if at least one value in the collection passes a test function.
 * 
 * @param {array or object} collection: Function takes in a collection, either an
 * array or an object.
 * @param {function} func: Function takes in a test function to be executed
 * on each value in <collection>. The test function returns either
 * truthy or falsy for each element.
 * @returns Function returns true if the test function returns truthy for at least
 * one value in <collection>, or false otherwise. 
 */

function some(collection, func) { // function takes in <collection> and callback <func>
    //determine if func does not resolve to truthy
    if (!func) {
        //determine if array;
        if (Array.isArray(collection)) {
            //iterate
            for (let i = 0; i < collection.length; i++) {
                //determine if current value is not truthy
                if (collection[i]) {
                    return true;
                }
            }
        } else {
            //iterate
            for (let key in collection) {
                //determine if current is not truthy
                if (collection[key]) {
                    return true;
                }
            }
        }
    } else {
        //determine if array
        if (Array.isArray(collection)) {
            //iterate
            for (let i = 0; i < collection.length; i++) {
                // determine if func(current value) is not truthy
                if (func(collection[i], i, collection)) {
                    return true;
                }
            }
        } else {
            // determine if func is not truthy
            for (let key in collection) {
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
        }
    }
    return false; // return false if <func> returns false for every value in collection
}
module.exports.some = this.some;

/**
 * reduce: Function designed to loop over an array and return an accumulated
 * value developed by executing a callback function for each element
 * of the array. The function returns an accumulated value based on the previous 
 * result of each iteration.
 * 
 * @param {array} array: Function takes in an array.
 * @param {function} func: Function takes in a callback function to be executed 
 * on each element of <array>, except the first element if no <seed> value is given.
 * The callback function has parameters of previous result, current <array> element, 
 * index, and <array>. The return value of the callback function is used as the 
 * previous result for the next iteration.
 * @param {any value} seed: Function takes in a seed value to be used as a previous
 * result on the first iteration of <array>. If no seed value is given, the first
 * iteration uses the first element of <array> as the previous result.
 * @returns {any value} Function returns the final callback result of the last 
 * iteration.
 */

function reduce(array, func, seed) { // function takes in <array>, callback <func> and <seed>
    //create result variable
    let result;
    //determine if seed is undefined;
    if (seed === undefined) {
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i, array);
        }
    } else {
        result = seed;
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i, array);
        }
    }
    return result; // return accumulated output
}
module.exports.reduce = this.reduce;

/**
 * extend: Function designed to extend a target object with the additional key/value 
 * pairs from other input objects.
 * 
 * @param {object} obj1: Function takes in a target object that is to be expanded.
 * @param  {...any} args: Function takes in additional source objects with key/value 
 * pairs that are to be added to the target object.
 * @returns Function returns an updated target object with all properties of the additional
 * source objects added.
 */

// function
function extend(obj1, ...args) { // function takes in target <obj1> and any number of additional objects
    for (var i = 0; i < args.length; i++) { // i = 0, 1, ... arg.length - 1
        for (let key in args[i]) { // add each additional key/value pair into the target array
            obj1[key] = args[i][key];
        }
    }
    return obj1; // return target object
}
module.exports.extend = this.extend;
