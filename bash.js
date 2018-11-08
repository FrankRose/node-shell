const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const echo = require('./echo');
const curl = require('./curl');
const date = require('./date');

const prompt = 'prompt > ';
const commands = {
  pwd,
  ls,
  cat,
  echo,
  curl,
  date,
};

const done = output => {
  process.stdout.write(output);
  process.stdout.write(`\n${prompt}`);
};

process.stdout.write(`${prompt}`);
process.stdin.on('data', data => {
  const [cmd, ...args] = data
    .toString()
    .trim()
    .split(' ');

  //   console.log(cmd);
  if (commands[cmd]) {
    commands[cmd](done, args);
  } else {
    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write(`\n${prompt}`);
    // process.stdout.write(`Command not found: ${cmd}`);
    done(`Command not found: ${cmd}`);
  }
});
