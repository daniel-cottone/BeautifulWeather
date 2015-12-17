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
    codeList: [
      {
        code: '01d',
        iconClass: 'wi wi-day-sunny',
        backgroundClass: 'day-clear'
      },
      {
        code: '01n',
        iconClass: 'wi wi-day-sunny',
        backgroundClass: 'night-clear'
      },
      {
        code: '02d',
        iconClass: 'wi wi-day-cloudy',
        backgroundClass: 'day-clear'
      },
      {
        code: '02n',
        iconClass: 'wi wi-day-cloudy',
        backgroundClass: 'night-cloudy'
      },
      {
        code: '03d',
        iconClass: 'wi wi-cloudy',
        backgroundClass: 'cloudy'
      },
      {
        code: '03n',
        iconClass: 'wi wi-cloudy',
        backgroundClass: 'night-cloudy'
      },
      {
        code: '04d',
        iconClass: 'wi wi-cloudy',
        backgroundClass: 'cloudy'
      },
      {
        code: '04n',
        iconClass: 'wi wi-cloudy',
        backgroundClass: 'night-cloudy'
      },
      {
        code: '09d',
        iconClass: 'wi wi-showers',
        backgroundClass: 'rainy'
      },
      {
        code: '09n',
        iconClass: 'wi wi-showers',
        backgroundClass: 'rainy'
      },
      {
        code: '10d',
        iconClass: 'wi wi-rain',
        backgroundClass: 'rainy'
      },
      {
        code: '10n',
        iconClass: 'wi wi-rain',
        backgroundClass: 'rainy'
      },
      {
        code: '11d',
        iconClass: 'wi wi-thunderstorm',
        backgroundClass: 'thunderstorm'
      },
      {
        code: '11n',
        iconClass: 'wi wi-thunderstorm',
        backgroundClass: 'thunderstorm'
      },
      {
        code: '13d',
        iconClass: 'wi wi-snow',
        backgroundClass: 'default'
      },
      {
        code: '13n',
        iconClass: 'wi wi-snow',
        backgroundClass: 'default'
      },
      {
        code: '50d',
        iconClass: 'wi wi-fog',
        backgroundClass: 'foggy'
      },
      {
        code: '50n',
        iconClass: 'wi wi-fog',
        backgroundClass: 'foggy'
      },
      {
        code: null,
        iconClass: 'wi wi-day-sunny',
        backgroundClass: 'default'
      }
    ]
  });
