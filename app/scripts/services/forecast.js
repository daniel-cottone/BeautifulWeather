'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.Forecast
 * @description
 * # Forecast
 * Factory in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .factory('Forecast', function ($resource) {
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {}, {
      'query': { method: 'GET', params: { action: 'read', format: '.json' } , isArray : false }
    });
  });
