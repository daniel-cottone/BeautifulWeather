'use strict';

var IndexPage = function () {
  this.path = '/';
  this.cityInput = element(by.model('city'));
  this.currentWeatherDiv = element(by.id('current-weather'));
  this.forecastDivs = element.all(by.id('forecast-day'));
  this.body = element(by.css('body'));

  this.visit = function () {
    browser.get(this.path);
  };

  this.setCityInput = function (cityInput) {
    this.cityInput.clear();
    this.cityInput.sendKeys(cityInput);
  };
};

module.exports = IndexPage;
