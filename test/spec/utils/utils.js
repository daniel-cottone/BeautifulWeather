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
    expect(Utils).toBeDefined();
  });

  it('should correctly return class string based on configuration', function () {
    angular.forEach(CONFIG.codeList, function (obj) {
      var iconClass = Utils.setClass(obj.code);
      expect(iconClass).toBe(obj.iconClass);
    });
  });

  it('should correctly return background string based on configuration', function () {
    angular.forEach(CONFIG.codeList, function (obj) {
      var backgroundClass = Utils.setBackground(obj.code);
      expect(backgroundClass).toBe(obj.backgroundClass);
    });
  });

});
