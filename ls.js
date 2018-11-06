const fs = require('fs')

module.exports = function () {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err
        } else {
            process.stdout.write(`\n \n ${files.join('\n')} \n \n`)
            process.stdout.write('prompt > ')
        }
    })
}