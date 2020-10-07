const { expect } = require('@jest/globals');
const map = require('./map');

test('Map', () => {
  expect(map([3, 12, 30], (num) => num * num)).toEqual([9, 144, 900]);
});
