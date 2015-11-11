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
    var apiKey = 'a43a8cf92f1e7752811377ddfbb60839';
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {}, {
      'query': { method: 'GET', params: { APPID: apiKey, action: 'read', format: '.json' } , isArray : false }
    });
  });
