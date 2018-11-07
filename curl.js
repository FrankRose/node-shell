const curl = require('request');

module.exports = function(args) {
  const url = args[0];
  curl.get(url, (err, res, body) => {
    if (err) return err;

    process.stdout.write(body);
  });
};
