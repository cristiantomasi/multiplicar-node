//requireds

const fs = require('fs');

let data = '';

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${ base } no es un numero`);
            return;
        }

        for (let i = 1; i <= 10; i++) {
            data += `${ i } * ${ base } = ${ base * i }\n`;

        }

        fs.writeFile(`tablas/tab)la-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else

                resolve(`tabla-${ base }.txt`)
        });

    });

}

module.exports = {
    crearArchivo
}