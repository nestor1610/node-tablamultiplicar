const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            describe: 'Es la base de la tabla de multiplicar',
            demandOption: true
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            describe: 'Multiplo de la base',
            default: 10
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            describe: 'Muestra la tabla en consola',
            default: false
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero';
        }

        if (isNaN(argv.h)) {
            throw 'El multiplo debe ser un numero';
        }

        return true;
    })
    .argv;

module.exports = argv;