'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('MainCtrl', function ($scope, $animate, Forecast, Weather) {

    // Promise chain to resolve current weather and 7 day forecast
    $scope.getWeather = function() {
      Weather.query({ q: $scope.city, units: 'imperial' }, function (data) {
        $scope.weather = data;  
      }).$promise
      .then(function () {
        return Forecast.query({ q: $scope.city, units: 'imperial' }, function (data) {
          $scope.forecast = data;
        }).$promise;
      });
    };

    // Sets the weather icon class
    $scope.setClass = function(code) {
      switch(code) {
        case '01d':
          return 'wi wi-day-sunny';
        case '02d':
          return 'wi wi-day-cloudy';
        case '03d':
          return 'wi wi-cloudy';
        case '04d':
          return 'wi wi-cloudy';
        case '09d':
          return 'wi wi-showers';
        case '10d':
          return 'wi wi-rain';
        case '11d':
          return 'wi wi-thunderstorm';
        case '13d':
          return 'wi wi-snow';
        case '50d':
          return 'wi wi-fog';
        default:
          return 'wi wi-day-sunny';
      }
    };

  });
