// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./cathryn-mcdonald2.github.io/projects/let-s-get-functional   here!!
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function (array) {
    // use _.filter() to return an array of only the male customers
    //iterate through collection and pass each item to a 'test function'
    //if 'test function' returns true, item is pushed to output array
    let males = _.filter(array, function (customer) {
        return customer.gender === 'male';
    });  // [ {male}, {male}, {male} ]
    return males.length
};

var femaleCount = function (array) {
    //use.reduce() to accumulate the number of female customers
    let females = _.reduce(array, function (accumulator, current) { // number f female customers | current item
        // accumulator = 0 | current = {name: 'Adele', gender: 'female'}
        if (current.gender === 'female') {
            accumulator++;
        }

        return accumulator;
    }, 0) // number of female customers
    return females;
};

var oldestCustomer = function (array) {
    let oldestAgeArray = _.pluck(array, 'age');
    let oldestAge = Math.max(...oldestAgeArray)
    let oldestName = _.reduce(array, function (accumulator, current) {
        if (current.age === oldestAge) {
            accumulator += current.name;
        }
        return accumulator;
    }, '')
    return oldestName;
};

var youngestCustomer = function (array) {
    let youngestAgeArray = _.pluck(array, 'age');
    let youngestAge = Math.min(...youngestAgeArray)
    let youngestName = _.reduce(array, function (accumulator, current) {
        if (current.age === youngestAge) {
            accumulator += current.name;
        }
        return accumulator;
    }, '')
    return youngestName;
};

var averageBalance = function (array) {
    let balanceArray = _.pluck(array, 'balance');
    let adjustedBalanceArray = _.map(balanceArray, function (balance) {
        var adjustedBalanceString = '';
        for (let i = 0; i < balance.length; i++) {
            if (balance[i] !== '$' && balance[i] !== ',') {
                adjustedBalanceString += balance[i];
            }
        }
        return Number(adjustedBalanceString);
    })
    let totalBalance = _.reduce(adjustedBalanceArray, function (accumulator, current) {
        accumulator += current;
        return accumulator;
    })
    return totalBalance / adjustedBalanceArray.length;
};

var firstLetterCount = function (array, letter) {
    let number = _.reduce(array, function (accumulator, current) {
        if (current.name[0].toUpperCase() === letter.toUpperCase()) {
            accumulator++
        }
        return accumulator;
    }, 0);
    return number;
};

var friendFirstLetterCount = function (array, customer, letter) {
    var matchingCustomerArray = _.filter(array, function (customerObject, index, array) {
        if (customerObject.name === customer) {
            return customerObject;
        }
    })
    return firstLetterCount(matchingCustomerArray[0].friends, letter);
};

var friendsCount = function (array, name) {
    var friendsArray = _.filter(array, function (customerObject, index, array) {
        if (_.contains(_.pluck(customerObject.friends, 'name'), name)) {
            return true;
        }
    })
    return _.pluck(friendsArray, 'name')
}

var topThreeTags = function (array) {
    var combinedTagArray = [];
    var outputArray = [];
    var nestedTagArray = [];
    for (let i = 0; i < array.length; i++) {
        nestedTagArray = _.map(array, function (current) {
            return current.tags
        })
    }
    for (let i = 0; i < nestedTagArray.length; i++) {
        for (let j = 0; j < nestedTagArray[i].length; j++) {
            combinedTagArray.push(nestedTagArray[i][j]);
        }
    };

    var uniqueTagArray = _.unique(combinedTagArray);
    var occurenceTagArray = _.map(uniqueTagArray, function (uTag) {
        return _.filter(combinedTagArray, function (tag) {
            return (tag === uTag)
        }).length
    });

    var uniqueObject = {};
    for (let i = 0; i < uniqueTagArray.length; i++) {
        uniqueObject[uniqueTagArray[i]] = occurenceTagArray[i];
    }
    console.log(uniqueObject)

    var sortedArray = occurenceTagArray.sort(); 
    for (let key in uniqueObject) {
        if (uniqueObject[key] === sortedArray[sortedArray.length - 1]) {
            outputArray.push(key);
            console.log(outputArray)
        } else if (uniqueObject[key] === sortedArray[sortedArray.length - 2]) {
            outputArray.push(key);
            console.log(outputArray)
        } else if (uniqueObject[key] === sortedArray[sortedArray.length - 3]) {
            outputArray(key);
            console.log(outputArray)
        }
    }
    console.log(outputArray)
    return outputArray;
}

var genderCount = function (array) {
    var outputObject = {};
    var male = _.reduce(array, function (accumulator, current) {
        if (current.gender === 'male') {
            accumulator++
        }
        return accumulator
    }, 0)
    outputObject.male = male
    var female = _.reduce(array, function (accumulator, current) {
        if (current.gender === 'female') {
            accumulator++
        }
        return accumulator
    }, 0)
    outputObject.female = female
    var nonbinary = _.reduce(array, function (accumulator, current) {
        if (current.gender === 'non-binary') {
            accumulator++
        }
        return accumulator
    }, 0)
    outputObject['non-binary'] = nonbinary
    return outputObject;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
