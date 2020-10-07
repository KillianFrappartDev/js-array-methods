const reduce = require('./reduce');

test('Reduce Clone', () => {
  expect(reduce([2, 5, 10], (acc, cur) => acc + cur)).toBe(17);
  expect(reduce([2, 5, 10], (acc, cur) => acc - cur)).toBe(-13);
  expect(reduce([2, 5, 10], (acc, cur) => acc * cur)).toBe(100);
});
