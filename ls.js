const fs = require('fs');

module.exports = function(callback) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      callback(err.message);
    } else {
      callback(files.join('\n'));
    }
  });
};
