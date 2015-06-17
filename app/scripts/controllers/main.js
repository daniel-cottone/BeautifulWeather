'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('MainCtrl', function ($scope, $animate, Address, Forecast, Weather) {

    // Promise chain to resolve address, current weather, and 7 day forecast
    $scope.getWeather = function() {
      Address.query({ address: $scope.city }, function (data) {
        $scope.address = data;
      }).$promise
      .then(function () {
        return Weather.query({ lat: $scope.address.latitude, lon: $scope.address.longitude, units: 'imperial' }, function (data) {
          $scope.weather = data;
        }).$promise;
      })
      .then(function () {
        return Forecast.query({ lat: $scope.address.latitude, lon: $scope.address.longitude, units: 'imperial' }, function (data) {
          $scope.forecast = data;
        }).$promise;
      });
    };

    // Sets the weather icon class and background
    $scope.setClass = function(code) {
      switch(code) {
        case '01d':
          $('body').css('background-image', 'url(../images/day.jpg)');
          return 'wi wi-day-sunny';
        case '02d':
          $('body').css('background-image', 'url(../images/cloudy.jpg)');
          return 'wi wi-day-cloudy';
        case '03d':
          $('body').css('background-image', 'url(../images/cloudy.jpg)');
          return 'wi wi-cloudy';
        case '04d':
          $('body').css('background-image', 'url(../images/cloudy.jpg)');
          return 'wi wi-cloudy';
        case '09d':
          $('body').css('background-image', 'url(../images/rainy.jpg)');
          return 'wi wi-showers';
        case '10d':
          $('body').css('background-image', 'url(../images/rainy.jpg)');
          return 'wi wi-rain';
        case '11d':
          $('body').css('background-image', 'url(../images/thunderstorm.jpg)');
          return 'wi wi-thunderstorm';
        case '13d':
          return 'wi wi-snow';
        case '50d':
          return 'wi wi-fog';
        default:
          $('body').css('background-image', 'url(../images/default.jpg)');
          return 'wi wi-day-sunny';
      }
    };

  });
