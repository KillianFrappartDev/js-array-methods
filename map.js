const mapClone = (arr, callback) => {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
};

module.exports = mapClone;
