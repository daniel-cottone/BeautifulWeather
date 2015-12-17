'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.CONFIG
 * @description
 * # CONFIG
 * Constant in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .constant('CONFIG', {
    weatherClasses: [
      {
        code: '01d',
        classString: 'wi wi-day-sunny'
      },
      {
        code: '02d',
        classString: 'wi wi-day-cloudy'
      },
      {
        code: '03d',
        classString: 'wi wi-cloudy'
      },
      {
        code: '04d',
        classString: 'wi wi-cloudy'
      },
      {
        code: '09d',
        classString: 'wi wi-showers'
      },
      {
        code: '10d',
        classString: 'wi wi-rain'
      },
      {
        code: '11d',
        classString: 'wi wi-thunderstorm'
      },
      {
        code: '13d',
        classString: 'wi wi-snow'
      },
      {
        code: '50d',
        classString: 'wi wi-fog'
      },
      {
        code: null,
        classString: 'wi wi-day-sunny'
      }
    ]
  });
