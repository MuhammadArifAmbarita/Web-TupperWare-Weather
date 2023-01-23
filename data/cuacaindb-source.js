class WeatherEarthquakeSource {
    static async getLatestEarthquake() {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
        const responseJson = await response.json();

        const responseList = await fetch(`https://cors-anywhere.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json`)
        const responseListJson = await responseList.json();
        return [responseJson, responseListJson];
    }    
}

export default WeatherEarthquakeSource;

