app.controller('ctrl.main', ['$scope', '$rootScope', '$request', function (scope, rootScope, request) {

    const fadeOut = () => {
        const loaderWrapper =
            document.querySelector('.wrapper');
        loaderWrapper.classList.add('fade');
    }

    window.addEventListener('load', fadeOut);

    scope.requests = {

        // Requisição do localizador de região com base na cidade
        location: function (local) {
            if (local == undefined) return;
            request.getLocation(local).then((response) => scope.loader(response.data))
        },

        // Requisição do localizador de região com base no seu local atual
        geolacation: function (lat, log) {
            request.getGeolacation(lat, log).then((response) => scope.loader(response.data))
        },

        // Requisição do Dicionario
        translation: function () {
            request.getTranslation().then((response) => response.data);
        }
    }

    scope.loader = function (response) {

        scope.weather = {

            locate: function () {
                let name = response.name
                return name
            },

            icon: function () {
                let icone = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
                return icone
            },

            temperature: function () {
                let temperature = `${Math.floor(response.main.temp)}°`
                return temperature
            },

            moisture: function () {
                let moisture = `${response.main.humidity}%`
                return moisture
            },

            velocity: function () {
                let velocity = `${Math.floor(response.wind.speed)}km/h`
                return velocity
            },

            cloudy: function () {
                let cloudy = `${response.clouds.all}%`
                return cloudy
            },

            climate: function () {
                let climate = response.weather[0].description
                return climate
            }
        }
    }

    scope.utc = {

        date: new Date(),

        day: function () {
            let day = scope.utc.date.getDate();
            return day < 10 ? `0${day}` : day;
        },

        month: function () {
            let month = scope.utc.date.getMonth() + 1;
            return month < 10 ? `0${month}` : month;
        },

        year: function () {
            let year = scope.utc.date.getFullYear();
            return year
        },

        completeDate: function () {
            date = `${scope.utc.day()}/${scope.utc.month()}/${scope.utc.year()}`
            return date
        },

        hours: function () {
            let hours = scope.utc.date.getHours();
            hours = hours % 12;
            hours = hours ? hours : 12;
            return hours
        },

        minutes: function () {
            let minutes = scope.utc.date.getMinutes();
            return minutes < 10 ? `0${minutes}` : minutes;
        },

        periods: function () {
            let ampm = scope.utc.date.getHours() >= 12 ? 'PM' : 'AM';
            return ampm
        },

        completeTime: function () {
            let time = `${scope.utc.hours()}:${scope.utc.minutes()} ${scope.utc.periods()}`
            return time;
        },
    }
}])