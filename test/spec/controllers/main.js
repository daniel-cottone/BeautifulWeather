'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherForecastApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  /*it('should attach an address object to the scope', function () {
    expect(!!scope.address).toBe(true);
  });

  it('should attach a weather object to the scope', function () {
    expect(!!scope.weather).toBe(true);
  });

  it('should attach a forecast object to the scope', function () {
    expect(!!scope.forecast).toBe(true);
  });*/

});
