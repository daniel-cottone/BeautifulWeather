'use strict';

describe('Service: Utils', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var Utils, CONFIG;
  beforeEach(inject(function (_Utils_, _CONFIG_) {
    Utils = _Utils_;
    CONFIG = _CONFIG_;
  }));

  it('should exist', function () {
    expect(!!Utils).toBe(true);
  });

  it('should correctly assign classes based on configuration', function () {
    angular.forEach(CONFIG.weatherClasses, function (obj) {
      var classString = Utils.setClass(obj.code);
      expect(classString).toBe(obj.classString);
    });
  });

});
