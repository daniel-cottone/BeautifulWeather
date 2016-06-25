'use strict';

var IndexPage = function () {
  this.path = '/';
  this.cityInput = element(by.model('city'));

  this.visit = function () {
    browser.get(this.path);
  };
};

module.exports = IndexPage;
