'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.Utils
 * @description
 * # Utils
 * Factory in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .factory('Utils', function () {

    return {
      setClass: function (code) {
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
      },

      setBackground: function () {
        return;
      }
    };

  });
