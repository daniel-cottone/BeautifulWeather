'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.Address
 * @description
 * # Address
 * Factory in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .factory('Address', function ($resource) {
    return $resource('http://maps.googleapis.com/maps/api/geocode/json', {}, {
      'query': { method: 'GET', params: { action: 'read', format: '.json' } , isArray : false }
    });
  });
