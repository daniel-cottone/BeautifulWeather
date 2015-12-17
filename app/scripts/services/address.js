'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.Address
 * @description
 * # Address
 * Factory in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .factory('Address', function ($resource, CONFIG) {
    return $resource(CONFIG.addressUrl, {}, {
      'query': { method: 'GET', params: { action: 'read', format: '.json' } , isArray : false }
    });
  });
