const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
    let salida = '';
    let consola = '';

    try {
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${base} ${colors.bgMagenta('x')} ${index} ${colors.bgBrightRed('=')} ${base * index}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if (listar) {
            console.log('======================'.red);
            console.log(`   Tabla del: colors ${colors.bgBlue(base)}`);
            console.log('======================'.red);
            console.log(consola);
        }

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}