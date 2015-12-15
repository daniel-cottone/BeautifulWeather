'use strict';

describe('Service: Weather', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var Weather;
  beforeEach(inject(function (_Weather_) {
    Weather = _Weather_;
  }));

  it('should exist', function () {
    expect(!!Weather).toBe(true);
  });

});
