////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(number1, number2) {
if (number1 < number2) {
  return number1;
} else {
  return number2;
}
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
  var numberAbsValue = Math.abs(number);
    if (numberAbsValue === 0) {
    return true;
  } else if (numberAbsValue === 1) {
    return false;
  }
return isEven(numberAbsValue - 2)
}

function factorial(number) {
  if (number === 0) {
    return 1
  }
  return number * factorial(number -1)
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, character) {
  var count = 0;
for (var i = 0; i < string.length; i++) {
  if (string[i] === character) {
    count++
  }
}
return count
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  var count = 0;
for (var i = 0; i < string.length; i++) {
  if (string[i] === 'B') {
    count++
  }
}
return count
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
