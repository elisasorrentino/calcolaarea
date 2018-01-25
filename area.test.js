//const request = require('supertest');
var getArea = require('./area.js');

test('more than 2  array elements', () => {
    expect(getArea([2,3,4])).toBe(-1);
});

test('1 array elements', () => {
    expect(getArea([2])).toBe(-1);
});

test('false array elements', () => {
    expect(getArea(false)).toBe(-1);
});

test('string array elements', () => {
    expect(getArea(['s', 'c'])).toBe(-1);
});

test('int, null array elements', () => {
    expect(getArea([2, null])).toBe(-1);
});
