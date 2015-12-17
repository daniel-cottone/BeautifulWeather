'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherForecastApp'));

  var MainCtrl,
    scope,
    Address,
    Forecast,
    Weather,
    Utils;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, _Address_, _Forecast_, _Weather_, _Utils_) {
    scope = $rootScope.$new();
    scope.city = 'Nashville';
    Address = _Address_;
    Forecast = _Forecast_;
    Weather = _Weather_;
    Utils = _Utils_;
    spyOn(Address, 'query').and.callThrough();
    spyOn(Forecast, 'query').and.callThrough();
    spyOn(Weather, 'query').and.callThrough();
    spyOn(Utils, 'setClass').and.callThrough();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Address: Address,
      Forecast: Forecast,
      Weather: Weather
    });
  }));

  it('should collect address data from API', function () {
    scope.getWeather();
    expect(Address.query).toHaveBeenCalled();
  });

  /*it('should collect forecast data from API', function () {
    scope.getWeather();
    expect(Forecast.query).toHaveBeenCalled();
  });*/

  it('should call Utils setClass', function () {
    scope.setClass();
    expect(Utils.setClass).toHaveBeenCalled();
  });

});
