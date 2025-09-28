const removeFromArray = function (arr, ...argument) {
    return arr.filter(item => !argument.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
