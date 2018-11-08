const fs = require('fs');

module.exports = function(callback, filenames) {
  let allFilesContent = '';
  filenames.forEach(filename => {
    fs.readFile(filename, 'utf8', (err, fileContent) => {
      if (err) {
        callback(err.message);
      }
      // process.stdout.write(
      //   `${filename}\n${'='.repeat(filename.length)}\n${fileContent}\n`
      // );
      // callback(`${filename}\n${'='.repeat(filename.length)}\n${fileContent}\n`);
      allFilesContent += `${filename}\n${'='.repeat(
        filename.length
      )}\n${fileContent}\n`;
    });
  });

  setTimeout(() => {
    callback(allFilesContent);
  }, 50);
};
