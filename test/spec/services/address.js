'use strict';

describe('Service: Address', function () {

  // load the service's module
  beforeEach(module('weatherForecastApp'));

  // instantiate service
  var Address;
  beforeEach(inject(function (_Address_) {
    Address = _Address_;
  }));

  it('should exist', function () {
    expect(!!Address).toBe(true);
  });

});
