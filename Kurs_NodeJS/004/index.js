var program = require('commander');

program
    .version('2.1.0');

program.command('random','wyswietla losowy numer').action((cmd) => {
    console.log(Math.random())
});

program.command('potega [ile]','oblicza druga potege').action((ile, cmd) => {

    console.log(Math.pow(Number(ile),2));
})

program.parse(process.argv);