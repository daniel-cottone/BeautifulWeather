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
    var apiKey = 'a43a8cf92f1e7752811377ddfbb60839';
    return $resource('http://api.openweathermap.org/data/2.5/weather', {}, {
      'query': { method: 'GET', params: { APPID: apiKey, action: 'read', format: '.json' } , isArray : false }
    });
  });
