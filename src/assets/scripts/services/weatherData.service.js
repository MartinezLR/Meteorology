angular.module('rootModule').service('weatherDataService', ['HTTPService', function (HTTPService) {

    this.getLocation = function (location) {
        return HTTPService.request({
            method: 'get',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${HTTPService.apiKey}&units=metric`
        });
    };

    this.getGeolocation = function (latitude, longitude) {
        return HTTPService.request({
            method: 'get',
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${HTTPService.apiKey}&units=metric`
        });
    };

    this.getLocationName = function (data) {
        return data.name;
    };

    this.getWeatherIconUrl = function (data) {
        return `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    };

    this.getTemperature = function (data) {
        return `${Math.floor(data.main.temp)}°`;
    };

    this.getHumidity = function (data) {
        return `${data.main.humidity}%`;
    };

    this.getWindSpeed = function (data) {
        return `${Math.floor(data.wind.speed)}km/h`;
    };

    this.getCloudiness = function (data) {
        return `${data.clouds.all}%`;
    };

    this.getWeatherDescription = function (data) {
        return data.weather[0].description;
    };
}]);