app.factory('$request', ['$http', function (http) {

    const key = '24cadfe23677b8512578d5f4d78e94e4'

    const getLocation = function (location) {
        return http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`);
    }

    const getGeolacation = function (latitude, longitude) {
        return http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`);
    }

    const getTranslation = function () {
        return http.get('assets/json/translation.json');
    }

    return {
        location: getLocation,
        geolacation: getGeolacation,
        translation: getTranslation,
    };
}]);