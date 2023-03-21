'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identity: Function designed to take in an input value and return the input value unchanged.
 * 
 * @param {any value} value: Function takes in any value. 
 * @returns {any value} Function returns input value unchanged.
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: Function designed to take in any value and return the javascript type of the 
 * value.
 * 
 * @param {any value} value: Function takes in any value. 
 * @returns {types are one of: 'string', 'array', 'object', 'undefinded',
 * 'number', 'boolean', 'null', function} Function returns the javascript
 * type as a string.
 */

_.typeOf = function (value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'string') {
        return 'string';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (typeof value === 'function') {
        return 'function';
    } else if (typeof value === 'object') {
        return 'object';
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Function designed to take in an input array and a number and return 
 * the first number of elements of the array.
 * 
 * @param {array} arrayP: The input array.
 * @param {number} numberP: The number of elements from the array to 
 * return. 
 * @returns {array} Function returns the first <number> of items of 
 * the <array>. If <array> is not an array, the function returns [].
 * If <number> is not given, or is not a number, or negative, the 
 * function returns the first element of the array. If <number>
 * is greater than the length of the array, the function returns
 * the entire array.
 */

_.first = function (arrayP, numberP) {
    if (!Array.isArray(arrayP)) {
        return [];
    } else if (typeof numberP !== 'number') {
        return arrayP[0];
    } else if (numberP < 0) {
        return [];
    } else {
        return arrayP.slice(0, numberP);
    }
}

module.exports.first = first;


/**
 * last: Function designed to take in an input array and a number and return 
 * the last number of elements of the array.
 * 
 * @param {array} arrayP: The input array.
 * @param {number} numberP: The number of elements from the array to 
 * return.
 * @returns {array} Function returns the last <number> of items of 
 * the <array>. If <array> is not an array, the function returns [].
 * If <number> is not given, or is not a number, or negative, the 
 * function returns the last element of the array. If <number>
 * is greater than the length of the array, the function returns
 * the entire array.
 */
_.last = function (arrayP, numberP) {
    if (!Array.isArray(arrayP)) {
        return [];
    } else if (typeof numberP !== 'number') {
        return arrayP[arrayP.length - 1];
    } else if (numberP < 0) {
        return [];
    } else {
        return arrayP.slice(Math.max(arrayP.length - numberP, 0), arrayP.length);
    }
}

module.exports.last = last;

/**
 * indexOf: Function designed to loop over an array and return the 
 * index of the array that is the first occurrence of the input value.
 * Function returns -1 if the value is not in the array.
 * 
 * @param {array} array: The array over which the Function iterates.
 * @param {any value} value: The value the function searches for.
 * @returns {} Function returns the index of the first occurrence of 
 * the value given. If the value isn't found, the function returns -1. 
 */

_.indexOf = function (array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf;


/**
 * 
 * @param {array} array: 
 * @param {any value} value: 
 * @returns {} Function returns
 */
_.contains = function (array, value) {
    var bool;
    for (let i = 0; i < array.length; i++) {
        bool = array[i] === value ? true : false;
        if (bool === true) {
            return true
        }
    }
    return false
}

module.exports.contains = this.contains;

/**
 * each: Function designed to loop over a collection, Array or Object, and call the 
 * callback function for each value in the collection.
 * 
 * @param {array or object} collection: The collection over which to iterate.
 * @param {function} action: The function to be applied to each value in the 
 * collection
 * @returns {array or object} Function returns a modified array or object with 
 * each element or property from the input array or object modified by the 
 * input Function.
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Function designed to
 * 
 * @param {array} array: 
 * @returns {array} Function returns
 */

_.unique = function (array) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i === _.indexOf(array, array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports.unique = unique;

/**
 * filter:Function designed to 
 * 
 * @param {array} array: 
 * @param {function} func:
 * @returns {} Function returns
 */

_.filter = function (array, func) {
    if (Array.isArray(array) && typeof func === 'function') {
        var newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (func(array[i], i, array)) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }
}

module.exports.filter = this.filter;

/**
 * 
 * @param {array} array: 
 * @param {function} func: 
 * @returns {} Function returns
 */

_.reject = function (array, func) {
    if (Array.isArray(array) && typeof func === 'function') {
        var newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!func(array[i], i, array)) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }
}

module.exports.reject = this.reject;

/**
 * 
 * @param {array} array: 
 * @param {function} func: 
 * @returns {} Function returns 
 */
_.partition = function (array, func) {
    if (Array.isArray(array) && typeof func === 'function') {
        var newArray1 = [];
        var newArray2 = [];
        var newArray3 = [];
        for (let i = 0; i < array.length; i++) {
            if (func(array[i], i, array)) {
                newArray1.push(array[i]);
            } else {
                newArray2.push(array[i]);
            }
        }
        newArray3.push(newArray1);
        newArray3.push(newArray2);
        return newArray3;
    }
}

module.exports.partition = this.partition;

/**
 * 
 * @param {array or object} collection; 
 * @param {function} func; 
 * @returns {} Function returns
 */

_.map = function (collection, func) {
    var newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray[i] = func(collection[i], i, collection);
        }
    } else {
        var i = 0;
        for (let key in collection) {
            newArray[i] = func(collection[key], key, collection);
            i++
        }
    }
    return newArray
}

module.exports.map = this.map;

/**
 * 
 * @param {array} array:
 * @param {object key} property: 
 * @returns {} Function returns
 */

_.pluck = function (array, property) {
    return _.map(array, function (value, index, array) {
        return value[property]
    })
}

module.exports.map = this.map
/**
 * 
 * @param {array or object} collection: 
 * @param {function} func: 
 * @returns {} Function returns
 */

_.every = function (collection, func) {
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
    return true;
}

module.exports.every = this.every;

/**
 * some: Function designed to loop over a collection, either an array or object, and
 * call the callback function for each value in the collection.
 * 
 * @param {array or objecy} collection: 
 * @param {function} func: A function
 * @returns Function returns 
 */

each: Function designed to loop over a collection, Array or Object, and call the 
* callback function for each value in the collection.
* 
* @param {array or object} collection: The collection over which to iterate.
* @param {function} action: The function to be applied to each value in the 
* collection
* @returns {array or object} Function returns a modified array or object with 
* each element or property from the input array or object modified by the 
* input Function.

_.some = function (collection, func) {
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
    return false;
}

module.exports.some = this.some;

/**
 * reduce: Function designed to iterate through the array and call the callback 
 * function for each element in the array. The function accumulates a return value 
 * based on the previous result.
 * 
 * @param {array} array: The array over which to iterate.
 * @param {function} func: The function to be applied to each value in the array as 
 * it accumulates a return value.
 * @param {any value} seed: The 
 * @returns {any value} Function returns an accumulated value.
 */

_.reduce = function(array, func, seed) {
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
    return result;
}

module.exports.reduce = this.reduce;

/**
 * extend: Function desigend to extend a target object with additional key/value pairs from additional objects into 
 * a target object.
 * 
 * @param {object} obj1: Object that is to be expanded.
 * @param  {...any} args: Additional objects to be copied into obj1.
 * @returns Function returns an updated object with all properties of the additional
 * objects copied in.
 */

_.extend = function(obj1, ...args) {
    for (var i = 0; i < args.length; i++) {
        for (let key in args[i]) {
            obj1[key] = args[i][key];
        }
    }
    return obj1;
}

module.exports.extend = this.extend;
