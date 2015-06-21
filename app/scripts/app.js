'use strict';

/**
 * @ngdoc overview
 * @name weatherForecastApp
 * @description
 * # weatherForecastApp
 *
 * Main module of the application.
 */
angular
  .module('weatherForecastApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.utils'
  ])
  .config(function ($locationProvider, $stateProvider) {

    // Disable hashbangs in URL
    $locationProvider.html5Mode(true);

    $stateProvider

      // Main Page
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });

    })
  .run(function ($state) {
    $state.go('main');
  });
