const { expect } = require('@jest/globals');
const filter = require('./filter');

test('Filter Clone', () => {
  expect(filter([2, 5, 10], (num) => num > 5)).toEqual([10]);
  expect(filter([2, 5, 10], (num) => num >= 5)).toEqual([5, 10]);
});
