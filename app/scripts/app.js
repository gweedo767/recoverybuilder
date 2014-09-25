'use strict';

/**
 * @ngdoc overview
 * @name recoverybuilderApp
 * @description
 * # recoverybuilderApp
 *
 * Main module of the application.
 */
angular
  .module('recoverybuilderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/latest/:recoveryType/:deviceName', {
        templateUrl: 'views/all.html',
        controller: 'LatestCtrl'
      })
      .when('/all/:deviceName', {
        templateUrl: 'views/all.html',
        controller: 'AllCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
