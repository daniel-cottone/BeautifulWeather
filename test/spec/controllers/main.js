'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherForecastApp'));

  // Controller variables
  var MainCtrl,
    scope,
    state,
    httpBackend,
    Address,
    Forecast,
    Weather,
    Utils,
    CONFIG;

  // Mock data
  var mockSearch,
    mockAddressResults,
    mockWeatherResults,
    mockForecastResults;

  // Initialize the controller, mock scope and services
  beforeEach(inject(function ($controller, $rootScope, _$state_, _$httpBackend_, _Address_, _Forecast_, _Weather_, _Utils_, _CONFIG_) {
    scope = $rootScope.$new();
    state = _$state_;
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

  // Initialize mock data and configure spies
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
    mockWeatherResults = {
      weather: [
        {
          icon: '04d',
          main: 'Clouds'
        }
      ],
      main: {
        temp: 34.47,
        humidity: 64
      },
      dt: 1450453553
    };
    mockForecastResults = {
      list: [
        {
          dt: 1450453553,
          temp: {
            max: 55,
            min: 35
          }
        },
        {
          dt: 1450453554,
          temp: {
            max: 54,
            min: 34
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

  /*it('should transition state to main', function () {
    httpBackend.expectGET('views/main.html').respond(200);
    httpBackend.flush();
    state.transitionTo('main');
    scope.$apply();*
    expect(state.current.name).toBe('main');
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
      expect(angular.equals(result, mockAddressResults)).toBe(true);
      expect(scope.address).toBeDefined();
      expect(scope.address).toEqual(address);
      expect(scope.formattedAddress).toBeDefined();
      expect(scope.formattedAddress).toEqual(formattedAddress);
      expect(scope.location).toBeDefined();
      expect(scope.location).toEqual(location);
    });

    httpBackend.expectGET(CONFIG.addressUrl + '?action=read&address=' + mockSearch + '&format=.json').respond(mockAddressResults);
    httpBackend.expectGET('views/main.html').respond(200);
    httpBackend.flush();
  });

  it('should get weather data and set scope objects', function () {
    var latitude = mockAddressResults.results[0].geometry.location.lat;
    var longitude = mockAddressResults.results[0].geometry.location.lon;

    scope.callWeather(latitude, longitude).$promise.then(function (result) {
      var weather = mockWeatherResults;
      var icon = weather.weather[0].icon;

      expect(Weather.query).toHaveBeenCalled();
      expect(angular.equals(result, mockWeatherResults)).toBe(true);
      expect(scope.weather).toBeDefined();
      expect(angular.equals(scope.weather, weather)).toBe(true);
      expect(scope.setBackground).toHaveBeenCalledWith(icon);
    });

    httpBackend.expectGET(CONFIG.weatherUrl + '?APPID=' + CONFIG.openWeatherMapAPIKey + '&action=read&format=.json&lat=' + latitude + '&lon=' + longitude + '&units=imperial').respond(mockWeatherResults);
    httpBackend.expectGET('views/main.html').respond(200);
    httpBackend.flush();
  });

  it('should get forecast data and set scope objects', function () {
    var latitude = mockAddressResults.results[0].geometry.location.lat;
    var longitude = mockAddressResults.results[0].geometry.location.lon;

    scope.callForecast(latitude, longitude).$promise.then(function (result) {
      var forecast = mockForecastResults;

      expect(Forecast.query).toHaveBeenCalled();
      expect(angular.equals(result, mockForecastResults)).toBe(true);
      expect(scope.forecast).toBeDefined();
      expect(angular.equals(scope.forecast, forecast)).toBe(true);
    });

    httpBackend.expectGET(CONFIG.forecastUrl + '?APPID=' + CONFIG.openWeatherMapAPIKey + '&action=read&format=.json&lat=' + latitude + '&lon=' + longitude + '&units=imperial').respond(mockForecastResults);
    httpBackend.expectGET('views/main.html').respond(200);
    httpBackend.flush();
  });

  it('should call promise chain to resolve data from API', function () {
    var latitude = mockAddressResults.results[0].geometry.location.lat;
    var longitude = mockAddressResults.results[0].geometry.location.lon;

    scope.city = mockSearch;
    scope.getWeather().then(function (result) {
      expect(scope.callAddress).toHaveBeenCalledWith(mockSearch);
      expect(angular.equals(result, scope.callAddress)).toBe(true);
    }).then(function (result) {
      expect(scope.callWeather).toHaveBeenCalledWith(latitude, longitude);
      expect(angular.equals(result, scope.callWeather)).toBe(true);
    }).then(function (result) {
      expect(scope.callForecast).toHaveBeenCalledWith(latitude, longitude);
      expect(angular.equals(result, scope.callForecast)).toBe(true);
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
