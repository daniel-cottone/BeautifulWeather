'use strict';

var IndexPage = require('../pages/index.page');

describe('BeautifulWeather: Index', function () {
  var page;

  beforeEach(function () {
    page = new IndexPage();
    page.visit();
  });

  it('should display properly on page load', function () {
    expect(page.cityInput.isDisplayed()).toEqual(true);
    expect(page.currentWeatherDiv.isDisplayed()).toEqual(false);
  });

  it('should display weather information', function () {
    page.setCityInput('Nashville');
    expect(page.currentWeatherDiv.isDisplayed()).toEqual(true);
  });
});
