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
    spyOn(Weather, 'query').and.callThrough();
    spyOn(Forecast, 'query').and.callThrough();
    spyOn(scope, 'callAddress').and.callThrough();
    spyOn(scope, 'callWeather').and.callThrough();
    spyOn(scope, 'callForecast').and.callThrough();
    spyOn(scope, 'setBackground').and.callThrough();
    spyOn(scope, 'getWeather').and.callThrough();
  });

  it('should exist', function () {
    expect(MainCtrl).toBeDefined();
  });

  it('should not have defined city in scope', function () {
    expect(scope.city).toBeUndefined();
  });

  it('should get address data and set scope objects', function () {
    var city = 'Nashville';

    scope.callAddress(city).then(function (result) {
      var address = result;
      var formattedAddress = address.results[0].formatted_address;
      var location = address.results[0].geometry.location;

      expect(Address.query).toHaveBeenCalled();
      expect(scope.address).toBeDefined();
      expect(scope.address).toBe(address);
      expect(scope.formattedAddress).toBeDefined();
      expect(scope.formattedAddress).toBe(formattedAddress);
      expect(scope.location).toBeDefined();
      expect(scope.location).toBe(location);
    });
  });

  it('should get weather data and set scope objects', function () {
    var latitude = '40';
    var longitude = '40';

    scope.callWeather(latitude, longitude).then(function (result) {
      var weather = result;
      var icon = weather.weather[0].icon;

      expect(Weather.query).toHaveBeenCalled();
      expect(scope.weather).toBeDefined();
      expect(scope.weather).toBe(weather);
      expect(scope.setBackground).toHaveBeenCalledWith(icon);
    });
  });

  it('should get forecast data and set scope objects', function () {
    var latitude = '40';
    var longitude = '40';

    scope.callForecast(latitude, longitude).then(function (result) {
      var forecast = result;

      expect(Forecast.query).toHaveBeenCalled();
      expect(scope.forecast).toBeDefined();
      expect(scope.forecast).toBe(forecast);
    });
  });

  it('should call promise chain to resolve data from API', function () {
    scope.city = 'Nashville';
    scope.getWeather().then(function () {
      expect(scope.callAddress).toHaveBeenCalled();
      expect(scope.callWeather).toHaveBeenCalled();
      expect(scope.callForecast).toHaveBeenCalled();
    });
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
