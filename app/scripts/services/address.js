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
    var apiKey = '9UuWeqAxwymshaNLe8CMCnU0HDUTp1fRgJgjsn0q4fAQyw7yPg';

    return $resource('https://montanaflynn-geocoder.p.mashape.com/address', {}, {
      'query': {
        method: 'GET',
        headers: { 'X-Mashape-Key' : apiKey },
        params: { action: 'read', format: '.json' } , isArray : false
      }
    });
  });
