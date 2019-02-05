var addTwoNumbers = require('./addTwoNumbers');

console.log(addTwoNumbers.addTwoNumbers(1, 2));

console.log(17 + parseInt("32"));
console.log(parseInt("cat"));

var str = "123, 124, 234,252";
var arr = str.split(",").map(val => Number(val) + 1);
console.log(arr);

console.log(addTwoNumbers.addNumberAndString(2, "2"));
