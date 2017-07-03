'use strict';

/**
 * @ngdoc function
 * @name trelloBoardPrintingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trelloBoardPrintingApp
 */
angular.module('trelloBoardPrintingApp')
  .controller('MainCtrl', function ($rootScope, $log, $location) {

    var main = this;

    main.input = {
      url: null,
      cookie: null,
    };

    if(!$rootScope.title){
      $rootScope.title = 'Trello Printing';
    }

    main.submit = function () {

      if (main.input.url) {
        $rootScope.url = main.input.url;
      } else {
        $log.warn('main.input.url null', main.input.url);
      }

      if (main.input.cookie) {
        $rootScope.cookie = main.input.cookie;
      } else {
        $log.warn('main.input.cookie null', main.input.cookie);        
      }

      $location.path('/cards');

    };

  });
