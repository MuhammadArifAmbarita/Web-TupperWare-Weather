import Animation from '../util/loading-animation.js'

class WeatherEarthquakeSource {
    static async getLatestEarthquake() {
        Animation.showLoadingAnimation();
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
        const responseJson = await response.json();

        const responseList = await fetch(`https://cors-anywhere.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json`)
        const responseListJson = await responseList.json();
        Animation.hiddenLoadingAnimation();
        return [responseJson, responseListJson];
    }

    static async getCuaca(provinsi, kota) {
        const response = await fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/${provinsi}/${kota}`);
        Animation.showLoadingAnimation();
        const responseJson = await response.json();
        console.log(document.querySelector('.cuaca-container'));
        document.querySelector('.cuaca-container').innerHTML = ''
        // this.getProvinsi();
        Animation.hiddenLoadingAnimation();
        return responseJson;
    }

    static async getProvinsi() {
        const response = await fetch(`https://api.binderbyte.com/wilayah/provinsi?api_key=2c37d29493b6870ca7a0db15f0e7b94e434e210cc61135749ba4cf39fca82910`)
        const responseJson = await response.json();
        const formProvinsi = document.querySelector('#provinsi');
        responseJson.value.forEach(el => {
        formProvinsi.innerHTML += `
            <option value='${el.id}'>${el.name}</option>
        `})
        return responseJson;
    }

    static async getCityFromProv(prov) {
        const response = await fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/${prov}`)
        const responseJson = await response.json();
        const formCity = document.querySelector('#kota');
        formCity.innerHTML = "";
        responseJson.data.areas.forEach( el => {
            formCity.innerHTML += `
                <option>${el.description}</option>
            `
        })
    }
}

export default WeatherEarthquakeSource;

