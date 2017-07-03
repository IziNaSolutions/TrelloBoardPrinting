'use strict';

/**
 * @ngdoc overview
 * @name trelloBoardPrintingApp
 * @description
 * # trelloBoardPrintingApp
 *
 * Main module of the application.
 */
angular
    .module('trelloBoardPrintingApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'markdown'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/cards', {
                templateUrl: 'views/cards.html',
                controller: 'CardsCtrl',
                controllerAs: 'self'
            })
            .otherwise({
                redirectTo: '/'
            });
    });