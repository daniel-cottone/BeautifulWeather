'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.Weather
 * @description
 * # Weather
 * Factory in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .factory('Weather', function ($resource) {
    return $resource('http://api.openweathermap.org/data/2.5/weather', {}, {
      'query': { method: 'GET', params: { action: 'read', format: '.json' } , isArray : false }
    });
  });
