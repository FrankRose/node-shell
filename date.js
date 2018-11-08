module.exports = function(callback) {
  const date = new Date(Date.now());
  callback(date.toString());
};
