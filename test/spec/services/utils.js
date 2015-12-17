'use strict';

describe('Service: Utils', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var Utils;
  beforeEach(inject(function (_Utils_) {
    Utils = _Utils_;
  }));

  it('should exist', function () {
    expect(!!Utils).toBe(true);
  });

});
