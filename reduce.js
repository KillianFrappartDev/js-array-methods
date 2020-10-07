const reduceClone = (arr, callback, init = arr[0]) => {
  let acc = init;
  let cur;
  for (let i = 1; i < arr.length; i++) {
    cur = arr[i];
    acc = callback(acc, cur);
  }
  return acc;
};

module.exports = reduceClone;
