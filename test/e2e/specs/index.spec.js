'use strict';

var IndexPage = require('../pages/index.page');

describe('BeautifulWeather: Index', function () {
  var page;

  beforeEach(function () {
    page = new IndexPage();
    page.visit();
  });

  it('should display properly on page load', function () {
    expect(page.cityInput.isDisplayed()).toBe(true);
    expect(page.currentWeatherDiv.isDisplayed()).toBe(false);
    expect(page.forecastDivs.count()).toBe(0);
    expect(page.body.getAttribute('class')).toBe('ng-scope');
  });

  it('should display weather information', function () {
    page.setCityInput('Nashville');
    expect(page.currentWeatherDiv.isDisplayed()).toBe(true);
    expect(page.forecastDivs.count()).toBe(7);
    expect(page.body.getAttribute('class')).not.toBe('ng-scope');
  });
});
