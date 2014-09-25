'use strict';

/**
 * @ngdoc function
 * @name recoverybuilderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recoverybuilderApp
 */
angular.module('recoverybuilderApp')
  .controller('MainCtrl', function ($scope, $http, deviceService) {
    //load current items database
    deviceService.async().then(function(data) {
    	$scope.devices = data;
    });
  });
