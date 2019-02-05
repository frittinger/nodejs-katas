function addTwoNumbers(x, y) {
    return x + y;
}

function addNumberAndString(n, s) {
    return n + parseInt(s);
}

/*
takes 0 to 2 numbers and return their sum with 0 for the empty string
 */
function add(s) {
    if (s !== null && s !== '') {
        splitValues = s.split(/,|\n/);
        return splitValues.reduce((a, b) => a + Number(b), 0);
    } else {
        return 0;
    }
}

module.exports.addTwoNumbers = addTwoNumbers;
module.exports.addNumberAndString = addNumberAndString;
module.exports.add = add;
