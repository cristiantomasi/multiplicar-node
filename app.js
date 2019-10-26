const arg = require('yargs').arg
    .command('listar',
        'Imprime tabla de multiplicar', {
            base: {
                demand: true
            }
        })
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//let argv2 = process.argv;
//let parametro = arg[2];
//let base = parametro.split('=')[1]

console.log(arg.base);


//crearArchivo(base)
//  .then(archivo => console.log(`Archivo creado ${ archivo }`))
//.catch(e => console.log(e));