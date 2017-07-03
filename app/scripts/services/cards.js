'use strict';

/**
 * @ngdoc service
 * @name trelloBoardPrintingApp.cards
 * @description 
 * # cards
 * Service in the trelloBoardPrintingApp.
 */
angular.module('trelloBoardPrintingApp')
  .service('cards', function ($http, $log) {

    /////////////////////////// init /////////////////////////////////
    var baseUrl = 'https://trello.com/b/zky1cN7d.json';

    //////////////////////////private functions /////////////////////////


    //////////////////////////public methods /////////////////////////

    function getCards(url, cookie) {

      if (url) {
        baseUrl = url;
      }

      // var config = cookie ? {
      //   headers: {
      //     'cookie': cookie
      //   },
      // } : {};

      return $http.get(baseUrl)
        .then(function (response) {
          return response.data;
        })
        .catch(function (response) {
          $log.error('connection failed', response);
          return;
        });
    }
    //////////////////////////  a p i  /////////////////////////

    var API = {
      getCards: getCards,
    };




    //////////////////////////  return   /////////////////////////

    return API;

  });
