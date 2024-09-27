const findTheOldest = function (array) {
    let oldest = [];


  array.forEach((element) => {
    let yearOfBirth = element.yearOfBirth;
    let yearOfDeath = element.yearOfDeath;
    let age = yearOfDeath - yearOfBirth;
    oldest.push(age, element.name);
    console.log(Math.max.apply(null, oldest)); // logs 5
});
};

// Do not edit below this line
module.exports = findTheOldest;
