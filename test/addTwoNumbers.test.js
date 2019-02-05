const addTwoNumbers = require('../addTwoNumbers');

test('adds 1 + 2 to equal 3', () => {
    expect(addTwoNumbers.addTwoNumbers(1, 2)).toBe(3);
});

test('adds 1 + "1" to equal 2', () => {
    expect(addTwoNumbers.addNumberAndString(1, "1")).toBe(2);
});

test('add nothing', () => {
    expect(addTwoNumbers.add("")).toBe(0);
});

test('one number returns itself', () => {
    expect(addTwoNumbers.add("7")).toBe(7);
});

test('add two numbers', () => {
    expect(addTwoNumbers.add("7,12")).toBe(19);
});

test('add 5 numbers', () => {
    expect(addTwoNumbers.add("1,2,3,4,5")).toBe(15);
});

test('add 5 numbers with , or \\n as seperators', () => {
    expect(addTwoNumbers.add("1,2\n3,4\n5")).toBe(15);
});
