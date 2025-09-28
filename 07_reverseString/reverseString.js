// × reverses single word (5 ms)
// √ reverses multiple words (1 ms)
// × works with numbers and punctuation (2 ms)
// × works with blank strings (1 ms) 
const reverseString = function (greeting) {
    let reverse = "";
    for (let i = greeting.length - 1; i >= 0; i--) {
        reverse = reverse + greeting[i]

    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
