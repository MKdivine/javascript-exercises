const palindromes = function (str) {
  if (str[0] === str[str.length - 1]) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
