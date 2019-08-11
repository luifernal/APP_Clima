const argv = require('./config/yargs').argv;
const getLugarLatLng = require('./lugar/lugar').getLugarLatLng;
const getClima = require('./clima/clima').getClima;

console.log(argv.direccion);

// getLugarLatLng(argv.direccion).then(
//     data => {
//         console.log(data);
//         getClima(data.lat, data.lng).then(console.log)
//             .catch(console.log);
//     }
// ).catch(console.log);


const getInfo = async(direccion) => {



    try {

        const data = await getLugarLatLng(direccion);
        const temp = await getClima(data.lat, data.lng);

        return `el clima de ${data.name} es de ${temp}`;
    } catch (err) {

        return `no se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion).then(console.log)
    .catch(console.log);