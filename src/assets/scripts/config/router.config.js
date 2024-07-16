angular.module('rootModule').config(function ($stateProvider, $urlRouterProvider) {

    // Definição das constantes de URL
    const templatesBasePath = './src/containers/';

    // Definição dos estados
    const states = [{
        name: 'home',
        url: '/home',
        templateUrl: `${templatesBasePath}home.html`,
        controller: 'homeController',
        resolve: {
            // Adicionar resoluções, se necessário
        }
    },
    ];

    // Estado padrão (fallback)
    $urlRouterProvider.otherwise('/home');

    // Registrar todos os estados
    states.forEach(state => $stateProvider.state(state));
});
