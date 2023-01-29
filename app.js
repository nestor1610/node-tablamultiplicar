require('colors');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg.rainbow))
    .catch(error => console.log(error));