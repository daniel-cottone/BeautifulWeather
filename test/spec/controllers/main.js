'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherForecastApp'));

  var MainCtrl,
    scope,
    httpBackend,
    Address,
    Forecast,
    Weather,
    Utils,
    CONFIG;

  var mockSearch,
    mockAddressResults;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _Address_, _Forecast_, _Weather_, _Utils_, _CONFIG_) {
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    Address = _Address_;
    Forecast = _Forecast_;
    Weather = _Weather_;
    Utils = _Utils_;
    CONFIG = _CONFIG_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  beforeEach(function () {
    mockSearch = 'Nashville';
    mockAddressResults = {
      results: [
        {
          formatted_address: 'Nashville, TN, USA',
          geometry: {
            location: {
              lon: '40',
              lat: '40'
            }
          }
        }
      ]
    };

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

  /*it('should transition state to main page', function () {
  });*/

  it('should not have defined city in scope', function () {
    expect(scope.city).toBeUndefined();
  });

  it('should get address data and set scope objects', function () {
    scope.callAddress(mockSearch).$promise.then(function (result) {
      var address = mockAddressResults.results[0];
      var formattedAddress = address.formatted_address;
      var location = address.geometry.location;

      expect(Address.query).toHaveBeenCalled();
      expect(scope.address).toBeDefined();
      expect(scope.address).toEqual(address);
      expect(scope.formattedAddress).toBeDefined();
      expect(scope.formattedAddress).toEqual(formattedAddress);
      expect(scope.location).toBeDefined();
      expect(scope.location).toEqual(location);
    });

    httpBackend.expectGET(CONFIG.addressUrl + '?action=read&address=Nashville&format=.json').respond(mockAddressResults);
    httpBackend.expectGET('views/main.html').respond(200);
    httpBackend.flush();
  });

  it('should get weather data and set scope objects', function () {
    var latitude = mockAddressResults.results[0].geometry.location.lat;
    var longitude = mockAddressResults.results[0].geometry.location.lon;

    scope.callWeather(latitude, longitude).$promise.then(function (result) {
      var weather = result;
      var icon = weather.weather[0].icon;

      expect(Weather.query).toHaveBeenCalled();
      expect(scope.weather).toBeDefined();
      expect(scope.weather).toBe(weather);
      expect(scope.setBackground).toHaveBeenCalledWith(icon);
    });

    /*httpBackend.expectGET(CONFIG.weatherUrl + '?APPID=' + CONFIG.openWeatherMapAPIKey + '&action=read&format=.json&lat=' + latitude + '&lon=' + longitude + '&units=imperial').respond(200);
    httpBackend.expectGET('views/main.html').respond(200);
    httpBackend.flush();*/
  });

  it('should get forecast data and set scope objects', function () {
    var latitude = mockAddressResults.results[0].geometry.location.lat;
    var longitude = mockAddressResults.results[0].geometry.location.lon;

    scope.callForecast(latitude, longitude).$promise.then(function (result) {
      var forecast = result;

      expect(Forecast.query).toHaveBeenCalled();
      expect(scope.forecast).toBeDefined();
      expect(scope.forecast).toBe(forecast);
    });
  });

  it('should call promise chain to resolve data from API', function () {
    scope.city = mockSearch;
    scope.getWeather().then(function (result) {
      expect(scope.callAddress).toHaveBeenCalled();
      expect(scope.callAddress).toBe(result);
    }).then(function (result) {
      expect(scope.callWeather).toHaveBeenCalled();
      expect(scope.callWeather).toBe(result);
    }).then(function (result) {
      expect(scope.callForecast).toHaveBeenCalled();
      expect(scope.callForecast).toBe(result);
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
