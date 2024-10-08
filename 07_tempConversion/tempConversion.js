const convertToCelsius = function(num) {
  let celsis = (num - 32) * 5 / 9;
  let rounded = Math.round(celsis * 10) / 10
  return rounded;
};

const convertToFahrenheit = function(num) {
  let fahr = (num * 9 / 5) + 32;
  let rounded = Math.round(fahr * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
