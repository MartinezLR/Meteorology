app.controller('mainCtrl', function ($scope, $rootScope) {

    $scope.translation = {

        'Clear': ' limpo',
        'clear sky': 'Céu limpo',
        'Clouds': 'Nuvens',
        'few clouds': 'Poucas nuvens',
        'scattered clouds': 'Nuvens dispersas',
        'broken clouds': 'Nuvens quebradas',
        'shower rain': 'chuva',
        'Rain': 'Raios',
        'thunderstorm': 'Tempestade',
        'snow': 'Neve',
        'mist': 'Névoa',
    }

    $scope.request = function (location, key) {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`)

            .then(response => response.json())

            .then((data) => {

                if (data?.cod && data.code === '404') {
                    console.log('Local não encontrado!')
                }

                $scope.load(data);
            });
    }

    $scope.load = function (data) {

        $scope.data = data

        $.each($scope.translation, function (indice, value) {

            if (indice == $scope.data.weather[0].main) $scope.clima = value;
        });

        $scope.nome = `Nome da cidade: ${$scope.data.name}`;

        $scope.temperatura = `Temperatura: ${Math.floor($scope.data.main.temp)}° C`;

        $scope.icon = `http://openweathermap.org/img/wn/${$scope.data.weather[0].icon}@2x.png`

        console.log($scope.nome);

        console.log($scope.temperatura);

        console.log($scope.clima);

        console.log($scope.icon);
    }

    $scope.request('Guararema', '24cadfe23677b8512578d5f4d78e94e4')
})