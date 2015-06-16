'use strict';

describe('Service: Weather', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var weather;
  beforeEach(inject(function (_weather_) {
    weather = _weather_;
  }));

  it('should do something', function () {
    expect(!!weather).toBe(true);
  });

});
