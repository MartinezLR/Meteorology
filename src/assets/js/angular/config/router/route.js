app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/inicio', {
            templateUrl: 'src/pages/inicio/inicio.html',
            controller: '$ctrl.inicio',
        })
        .otherwise({ redirectTo: '/inicio' });
}])