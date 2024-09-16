const repeatString = function (str, num1) {
  let result = "";
  if (num1 < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num1; i++) {
    result += str;
  }
  return result;
};
// Do not edit below this line
module.exports = repeatString;
