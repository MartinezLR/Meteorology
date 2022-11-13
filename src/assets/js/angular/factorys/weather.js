app.factory('$weather', [function () {

    const locate = function (data) {
        let name = data.name
        return name
    }

    const icon = function (data) {
        let icone = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        return icone
    }

    const temperature = function (data) {
        let temperature = `${Math.floor(data.main.temp)}°`
        return temperature
    }

    const moisture = function (data) {
        let moisture = `${data.main.humidity}%`
        return moisture
    }

    const velocity = function (data) {
        let velocity = `${Math.floor(data.wind.speed)}km/h`
        return velocity
    }

    const cloudy = function (data) {
        let cloudy = `${data.clouds.all}%`
        return cloudy
    }

    const climate = function (data) {
        let climate = data.weather[0].description
        return climate
    }

    return {
        locate: locate,
        icon: icon,
        temperature: temperature,
        moisture: moisture,
        velocity: velocity,
        cloudy: cloudy,
        climate: climate
    };
}]);