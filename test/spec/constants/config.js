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
    expect(!!CONFIG).toBe(true);
  });

});
