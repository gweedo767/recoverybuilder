'use strict';

/**
 * @ngdoc function
 * @name recoverybuilderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recoverybuilderApp
 */
angular.module('recoverybuilderApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope, deviceService, devicedetailsservice) {
    //load current items database
    deviceService.async().then(function(data) {
    	$scope.devices = data;
    	$scope.totalDevices = data.length;
    });

    //load additional device details
    devicedetailsservice.async().then(function(data) {
    	$scope.deviceDetails = data;
    });
  });
