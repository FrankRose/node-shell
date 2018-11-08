const curl = require('request');

module.exports = function(callback, args) {
  const url = args[0];
  curl.get(url, (err, res, body) => {
    if (err) return err;

    // process.stdout.write(body);
    callback(body);
  });
};
