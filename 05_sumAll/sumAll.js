const sumAll = function (num1, num2) {
    let sum = 0;
  
    if (num1 < 0 || num2 < 0 || typeof num1 === 'string' || typeof num2 === 'string' ||  (num1 % 1  === 0) === false || (num2 % 1  === 0) === false) {
      return "ERROR";
    } else if (num1 > num2) {
      for (let i = num1; i >= num2; i--) {
        sum += i;
      }
    } else {
      for (let i = num1; i <= num2; i++) {
        sum += i;
      }
    }
  // scho
    return sum;
  }
  


// Do not edit below this line
module.exports = sumAll;
