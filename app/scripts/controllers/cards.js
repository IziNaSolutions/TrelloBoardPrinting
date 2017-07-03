'use strict';

/**
 * @ngdoc function
 * @name trelloBoardPrintingApp.controller:CardsCtrl
 * @description
 * # CardsCtrl
 * Controller of the trelloBoardPrintingApp
 */
angular.module('trelloBoardPrintingApp')
    .controller('CardsCtrl', function(cards, $rootScope, $log) {

        //////////////// init ///////////////

        var self = this;
        cards.getCards($rootScope.url, $rootScope.cookie)
            .then(function(res) {
                self.data = res;
                $rootScope.title = res.name;
                window.title = $rootScope.title;
                $log.info('window title', window.title);
            });


        //////////////// private functions ///////////////



        //////////////// public methods ///////////////





    });