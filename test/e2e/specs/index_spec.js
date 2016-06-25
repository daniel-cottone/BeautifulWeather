'use strict';

var IndexPage = require('../pages/indexpage');

describe('BeautifulWeather: Index', function () {
  var page;

  beforeEach(function () {
    page = new IndexPage();
    page.visit();
  });

  it('should properly load expected elements', function () {
    expect(page.cityInput.isDisplayed()).toEqual(true);
  });
});
