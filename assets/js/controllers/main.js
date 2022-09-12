app.controller('mainCtrl', function ($scope, $rootScope, request) {

    const fadeOut = () => {
        const loaderWrapper =
            document.querySelector('.wrapper');
        loaderWrapper.classList.add('fade');
    }

    window.addEventListener('load', fadeOut);

    $scope.translation = {

        'clear sky': 'Céu limpo',
        'few clouds': 'Poucas nuvens',
        'scattered clouds': 'Nuvens dispersas',
        'broken clouds': 'Nuvens quebradas',
        'overcast clouds': 'Nuvens nubladas',
        'shower rain': 'Chuva',
        'rain': 'Raios',
        'snow': 'Neve',
        'mist': 'Névoa',

        // Thunderstorm = Tempestade (Grupo)
        'thunderstorm with light rain': 'Trovoada com chuva fraca',
        'thunderstorm with rain': 'Trovoada com chuva',
        'thunderstorm with heavy rain': 'Trovoada com chuva forte',
        'light thunderstorm': 'Trovoada leve',
        'thunderstorm': 'Tempestade',
        'heavy thunderstorm': 'Forte tempestade',
        'ragged thunderstorm': 'Tempestade irregular',
        'thunderstorm with light drizzle': 'Trovoada com chuvisco',
        'thunderstorm with drizzle': 'Trovoada com chuvisco',
        'thunderstorm with heavy drizzle': 'Trovoada com chuva forte',

        // Drizzle = Chuvisco (Grupo)
        'light intensity drizzle': 'Chuvisco de intensidade de luz',
        'drizzle': 'Chuvisco',
        'heavy intensity drizzle': 'Chuvisco de forte intensidade',
        'light intensity drizzle rain': 'Chuva de intensidade leve com raios',
        'drizzle rain': 'Chuvisco com raios',
        'heavy intensity drizzle rain': 'Chuva de garoa de forte intensidade',
        'shower rain and drizzle': 'Chuva e chuvisco',
        'heavy shower rain and drizzle': 'Chuva forte chuva e chuvisco',
        'shower drizzle': 'Chuvisco',

        // Rain = Raios (Grupo)
        'light rain': 'Chuva leve',
        'moderate rain': 'Chuva moderada',
        'heavy intensity rain': 'Chuva de forte intensidade',
        'very heavy rain': 'Chuva muito forte',
        'extreme rain': 'Chuva extrema',
        'freezing rain': 'Chuva congelante',
        'light intensity shower rain': 'Chuva de intensidade de luz',
        'shower rain': 'Chuva de banho',
        'heavy intensity shower rain': 'Chuva de chuva de forte intensidade',
        'ragged shower rain': 'Chuva de chuveiro irregular',

        // Snow = Neve (Grupo)
        'light snow': 'Pouca neve',
        'Snow': 'Neve',
        'Heavy snow': 'Neve pesada',
        'Sleet': 'granizo',
        'Light shower sleet': 'Chuveiro leve',
        'Shower sleet': 'Chuveiro de granizo',
        'Light rain and snow': 'Chuva leve e neve',
        'Rain and snow': 'Chuva e neve',
        'Light shower snow': 'Chuva de neve leve',
        'Shower snow': 'Chuva de neve',
        'Heavy shower snow': 'Chuva de neve forte',

        // Clear = Limpo (Grupo)
        'clear sky': 'Céu limpo',

        // Clouds = Nuvens (Grupo)
        'few clouds: 11-25%': 'Poucas nuvens: 11-25%',
        'scattered clouds: 25-50%': 'Nuvens espalhadas: 25-50%',
        'broken clouds: 51-84%': 'Nuvens quebradas: 51-84%',
        'overcast clouds: 85-100%': 'Nuvens nubladas: 85-100%',
    }

    $scope.send = function (local) {

        local == ''

            ? $scope.location()

            : request.getLocation(local).then((data) => $scope.load(data));
    }

    $scope.geolocation = function (lat, log) {

        request.getGeolacation(lat, log).then((data) => $scope.load(data));
    }

    $scope.load = function (data) {

        $rootScope.weather = {

            full: data,

            local: data.name,

            icone: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,

            temperatura: `${Math.floor(data.main.temp)}°`,

            umidade: `${data.main.humidity}%`,

            velocidade: `${Math.floor(data.wind.speed)}km/h`,

            nublado: `${data.clouds.all}%`,

            clima: function () {

                $.each($scope.translation, function (indice, value) {

                    if (indice == data.weather[0].description) $scope.clima = value
                });

                return $scope.clima
            },

            horas: function () {

                const date = new Date()

                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            }
        }

        console.log($rootScope.weather.full);
    }

    $scope.location = function () {
        navigator.geolocation.getCurrentPosition(p => $scope.geolocation(p.coords.latitude, p.coords.longitude))
    }

    $scope.location();
})