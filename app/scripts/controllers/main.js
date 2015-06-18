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
          $scope.setBackground($scope.weather.weather[0].icon);
        }).$promise;
      })
      .then(function () {
        return Forecast.query({ lat: $scope.address.latitude, lon: $scope.address.longitude, units: 'imperial' }, function (data) {
          $scope.forecast = data;
        }).$promise;
      });
    };

    // Sets the background
    $scope.setBackground = function(code) {
      $('body').removeClass();
      switch(code) {
        case '01d':
          $('body').addClass('day');
          break;
        case '01n':
          $('body').addClass('night');
          break;
        case '02d':
          $('body').addClass('cloudy');
          break;
        case '03d':
          $('body').addClass('cloudy');
          break;
        case '04d':
          $('body').addClass('cloudy');
          break;
        case '09d':
          $('body').addClass('rainy');
          break;
        case '10d':
          $('body').addClass('rainy');
          break;
        case '11d':
          $('body').addClass('thunderstorm');
          break;
        case '13d':
          break;
        case '50d':
          $('body').addClass('foggy');
          break;
        default:
          $('body').addClass('default');
          break;
      }
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
