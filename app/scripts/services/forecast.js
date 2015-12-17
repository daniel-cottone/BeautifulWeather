'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.Forecast
 * @description
 * # Forecast
 * Factory in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .factory('Forecast', function ($resource, CONFIG) {
    var apiKey = CONFIG.openWeatherMapAPIKey;
    return $resource(CONFIG.forecastUrl, {}, {
      'query': { method: 'GET', params: { APPID: apiKey, action: 'read', format: '.json' } , isArray : false }
    });
  });
