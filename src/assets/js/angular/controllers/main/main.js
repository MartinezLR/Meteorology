
app.controller('$ctrl.main', ['$scope', '$rootScope', '$request', '$weather', '$utc', function (scope, rootScope, request, weather, utc) {

    scope.menu = function () {
        $('body, html').toggleClass('open');
        // $('button.menu').attr('disabled', 'true')
    }

    // loading
    scope.fadeOut = function () {
        $('body').removeClass('overflow-hidden')
        $('div.loader').addClass('fade')
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
        completeTime: utc.refreshTime(),

        refreshTime: function () {
            setInterval(function () {
                $('span.date-hours').html(utc.refreshTime());
            }, 1000);
        }
    }

    scope.time.refreshTime()
    scope.location('Guararema');
    scope.geolacation()
}])