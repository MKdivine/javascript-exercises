const sumAll = function (...nums) {
    let sum = 0;

    nums.forEach(element => {
        sum += element;
    });
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
