const axios = require('axios');



const getLugarLatLng = async(direccion) => {

    const encodedUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '2f492dc3a3msh9fef21debc45599p1d7f3bjsnd24e15de8e1f' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        name,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}