
app.controller('$ctrl.main', ['$scope', '$rootScope', '$request', '$weather', '$utc', '$route', '$routeParams', '$location', function main(scope, rootScope, request, weather, utc, $route, $routeParams, $location) {
    var vm = this;

    vm.$route = $route;
    vm.$location = $location;
    vm.$routeParams = $routeParams;

    // loading
    scope.fadeOut = () => {
        const loader = $('div.wrapper').addClass('fade');
        return loader
    }

    // Requisição do localizador de região com base na cidade
    scope.location = async function (local) {

        local ?? true ? await request.location(local).then(response => scope.weather(response.data)).catch(resp => console.log(`Erro encontrado: ${resp.data.message}`)) : scope.geolacation()
        scope.fadeOut()
    }

    // Requisição do localizador de região com base no seu local atual
    scope.geolacation = function () {
        navigator.geolocation.getCurrentPosition(async function (position) {
            await request.geolacation(position.coords.latitude, position.coords.longitude).then((response) => scope.weather(response.data))
            scope.fadeOut()
        })
    }

    scope.weather = function (data) {

        scope.meteorology = {
            locate: weather.locate(data),
            icon: weather.icon(data),
            temperature: weather.temperature(data),
            moisture: weather.moisture(data),
            velocity: weather.velocity(data),
            cloudy: weather.cloudy(data),
            climate: weather.climate(data),
        }
    }

    scope.utc = function () {

        scope.date = {
            day: utc.day(),
            month: utc.month(),
            year: utc.year(),
            completeDate: utc.completeDate(),
        }

        scope.time = {
            hours: utc.hours(),
            minutes: utc.minutes(),
            periods: utc.periods(),
            completeTime: utc.completeTime(),
        }
    }

    scope.utc()
    // scope.geolacation()
}])