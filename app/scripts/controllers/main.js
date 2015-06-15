'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('MainCtrl', function ($scope, Forecast) {

    // Promise chain to resolve forecast
    $scope.getForecast = function() {
      Forecast.query({ q: $scope.city, units: 'imperial' }, function (data) {
        $scope.forecast = data;
      });
    };
    
  });
