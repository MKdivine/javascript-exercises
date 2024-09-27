
let newBooks = []
const getTheTitles = function(arr) {
    arr.forEach(element => {
        newBooks.push(element.title)
    });
    return newBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
