'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherForecastApp'));

  var MainCtrl,
    scope,
    q,
    Address,
    Forecast,
    Weather,
    Utils;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Address_, _$q_, _Forecast_, _Weather_, _Utils_) {
    scope = $rootScope.$new();
    q = _$q_;
    Address = _Address_;
    Forecast = _Forecast_;
    Weather = _Weather_;
    Utils = _Utils_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  beforeEach(function () {
    spyOn(Address, 'query').and.callThrough();
  });

  it('should exist', function () {
    expect(MainCtrl).toBeDefined();
  });

  it('should not have defined city in scope', function () {
    expect(scope.city).toBeUndefined();
  });

  it('should collect address data from API', function () {
    scope.city = 'Nashville';
    scope.getWeather();
    expect(Address.query).toHaveBeenCalled();
  });

  it('should call Utils setBackground', function () {
    spyOn(Utils, 'setBackground').and.callThrough();
    scope.setBackground();
    expect(Utils.setBackground).toHaveBeenCalled();
  });

  it('should call Utils setClass', function () {
    spyOn(Utils, 'setClass').and.callThrough();
    scope.setClass();
    expect(Utils.setClass).toHaveBeenCalled();
  });

});
