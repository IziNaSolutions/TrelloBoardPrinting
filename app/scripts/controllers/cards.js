'use strict';

/**
 * @ngdoc function
 * @name trelloBoardPrintingApp.controller:CardsCtrl
 * @description
 * # CardsCtrl
 * Controller of the trelloBoardPrintingApp
 */
angular.module('trelloBoardPrintingApp')
    .controller('CardsCtrl', function(cards) {

        //////////////// init ///////////////

        var self = this;
        cards.getCards()
            .then(function(res) {
                self.data = res;
            });


        //////////////// private functions ///////////////



        //////////////// public methods ///////////////





    });