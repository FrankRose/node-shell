const fs = require('fs');

module.exports = function(callback) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      // throw err;
      callback(err.message);
    } else {
      // process.stdout.write(`\n ${files.join('\n')} \n \n`);
      callback(files.join('\n'));
    }
  });
};
