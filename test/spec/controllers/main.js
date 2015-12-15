'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherForecastApp'));

  var MainCtrl,
    scope,
    Address;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Address_) {
    scope = $rootScope.$new();
    scope.city = 'Nashville';
    Address = _Address_;
    spyOn(Address, 'query').and.callThrough();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Addres: Address
    });
  }));

  it('should collect data from API', function () {
    scope.getWeather();
    expect(Address.query).toHaveBeenCalled();
  });

});
