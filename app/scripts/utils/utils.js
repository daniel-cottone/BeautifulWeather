'use strict';

/**
 * @ngdoc service
 * @name weatherForecastApp.Utils
 * @description
 * # Utils
 * Factory in the weatherForecastApp.
 */
angular.module('weatherForecastApp')
  .factory('Utils', function (CONFIG) {

    return {
      setClass: function (code) {
        var classString;
        angular.forEach(CONFIG.weatherClasses, function (obj) {
          if (obj.code === code) {
            classString = obj.classString;
          }
        });
        return classString;
      },

      setBackground: function () {
      }
    };

  });
