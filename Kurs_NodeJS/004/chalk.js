const chalk = require('chalk');

//console.log(chalk.bgGreen('TEST'));

console.log(chalk.green('TEST'));

console.log(chalk.white.bgRed('TEST'));

const error = chalk.white.bgRed.bold;
const success = chalk.green.bold;

console.log(error('TEST') + 'test 3');

console.log(success('TEST 2'));