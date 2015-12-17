'use strict';

/**
 * @ngdoc function
 * @name weatherForecastApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherForecastApp
 */
angular.module('weatherForecastApp')
  .controller('MainCtrl', function ($scope, $animate, Address, Forecast, Weather, Utils) {

    // Promise chain to resolve address, current weather, and 7 day forecast
    $scope.getWeather = function() {
      Address.query({ address: $scope.city }, function (data) {
        $scope.address = data;
        $scope.location = $scope.address.results[0].geometry.location;
        $scope.formattedAddress = $scope.address.results[0].formatted_address;
      }).$promise
      .then(function () {
        return Weather.query({ lat: $scope.location.lat, lon: $scope.location.lng, units: 'imperial' }, function (data) {
          $scope.weather = data;
          $scope.setBackground($scope.weather.weather[0].icon);
        }).$promise;
      })
      .then(function () {
        return Forecast.query({ lat: $scope.location.lat, lon: $scope.location.lng, units: 'imperial' }, function (data) {
          $scope.forecast = data;
        }).$promise;
      });
    };

    // Sets the background
    $scope.setBackground = function(code) {
      $('body').removeClass();
      switch(code) {
        case '01d':
          $('body').addClass('day-clear');
          break;
        case '01n':
          $('body').addClass('night-clear');
          break;
        case '02d':
          $('body').addClass('day-clear');
          break;
        case '02n':
          $('body').addClass('night-cloudy');
          break;
        case '03d':
          $('body').addClass('cloudy');
          break;
        case '03n':
          $('body').addClass('night-cloudy');
          break;
        case '04d':
          $('body').addClass('cloudy');
          break;
        case '04n':
          $('body').addClass('night-cloudy');
          break;
        case '09d':
        case '09n':
          $('body').addClass('rainy');
          break;
        case '10d':
        case '10n':
          $('body').addClass('rainy');
          break;
        case '11d':
        case '11n':
          $('body').addClass('thunderstorm');
          break;
        case '13d':
        case '13n':
          break;
        case '50d':
        case '50n':
          $('body').addClass('foggy');
          break;
        default:
          $('body').addClass('default');
          break;
      }
    };

    // Sets the weather icon class
    $scope.setClass = function(code) {
      return Utils.setClass(code);
    };

  });
