const direccion = {
    demand: true,
    desc: 'Direccion de la ciudad para obtener el clima',
    alias: 'd'
}

const argv = require('yargs')
    .options({ direccion })
    .help()
    .argv;

module.exports = {
    argv
}