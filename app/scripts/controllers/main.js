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

    $scope.callAddress = function (city) {
      return Address.query({ address: city }, function (data) {
        $scope.address = data.results[0];
        $scope.formattedAddress = $scope.address.formatted_address;
        $scope.location = $scope.address.geometry.location;
      });
    };

    $scope.callWeather = function (latitude, longitude) {
      return Weather.query({ lat: latitude, lon: longitude, units: 'imperial' }, function (data) {
        $scope.weather = data;
        $scope.setBackground($scope.weather.weather[0].icon);
      });
    };

    $scope.callForecast = function (latitude, longitude) {
      return Forecast.query({ lat: latitude, lon: longitude, units: 'imperial' }, function (data) {
        $scope.forecast = data;
      });
    };

    // Promise chain to resolve address, current weather, and 7 day forecast
    $scope.getWeather = function () {
      return $scope.callAddress($scope.city).$promise
      .then(function () {
        return $scope.callWeather($scope.location.lat, $scope.location.lng).$promise
        .then(function () {
          return $scope.callForecast($scope.location.lat, $scope.location.lng).$promise;
        });
      });
    };

    // Sets the background
    $scope.setBackground = function (code) {
      $('body').removeClass();
      var backgroundClass = Utils.setBackground(code);
      $('body').addClass(backgroundClass);
    };

    // Sets the weather icon class
    $scope.setClass = function (code) {
      return Utils.setClass(code);
    };

  });
