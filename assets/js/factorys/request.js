app.factory('request', ['$http', function ($http) {

    var getLocation = function (location, key = '24cadfe23677b8512578d5f4d78e94e4') {

        return $http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`)

            .then(function (response) {

                return response.data
            });
    }

    var getGeolacation = function (latitude, longitude, key = '24cadfe23677b8512578d5f4d78e94e4') {

        return $http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`)

            .then(function (response) {

                return response.data
            });
    }

    return {
        getLocation: getLocation,
        getGeolacation: getGeolacation,
    };
}]);