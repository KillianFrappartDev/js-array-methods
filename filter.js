const filterClone = (arr, callback) => {
  const result = [];
  for (const item of arr) {
    callback(item) && result.push(item);
  }
  return result;
};

module.exports = filterClone;
