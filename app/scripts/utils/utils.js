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
        var iconClass;
        angular.forEach(CONFIG.codeList, function (obj) {
          if (obj.code === code) {
            iconClass = obj.iconClass;
          }
        });
        return iconClass;
      },

      setBackground: function (code) {
        var backgroundClass;
        angular.forEach(CONFIG.codeList, function (obj) {
          if (obj.code === code) {
            backgroundClass = obj.backgroundClass;
          }
        });
        return backgroundClass;
      }
    };

  });
