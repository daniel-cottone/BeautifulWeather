'use strict';

describe('Service: CONFIG', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var CONFIG;
  beforeEach(inject(function (_CONFIG_) {
    CONFIG = _CONFIG_;
  }));

  it('should exist', function () {
    expect(CONFIG).toBeDefined();
  });

  it('should contain API information', function () {
    expect(CONFIG.addressUrl).toBeDefined();
    expect(CONFIG.forecastUrl).toBeDefined();
    expect(CONFIG.weatherUrl).toBeDefined();
    expect(CONFIG.openWeatherMapAPIKey).toBeDefined();
  });

  it('should contain a code list', function () {
    expect(CONFIG.codeList).toBeDefined();
    angular.forEach(CONFIG.codeList, function (obj) {
      expect(obj.code).toBeDefined();
      expect(obj.iconClass).toBeDefined();
      expect(obj.backgroundClass).toBeDefined();
    });
  });

});
