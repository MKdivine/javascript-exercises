const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let result = 0;
  arr.forEach(num => {
      result += num;
  });
  return result;
}


function multiply(arr) {
  let result = 1;
  arr.forEach(num => {
      result *= num;
  });
  return result;
}


const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1, num2) {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
