'use strict';

/**
 * @ngdoc function
 * @name recoverybuilderApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the recoverybuilderApp
 */
angular.module('recoverybuilderApp')
  .controller('AllCtrl', function ($scope, $routeParams, $log, devicefileservice) {
    //load current items database
    $scope.deviceName = $routeParams.deviceName;

    devicefileservice.async().then(function(data) {
    	var fileList = [];
    	angular.forEach( data, function( key, val ) {
            if( val == $scope.deviceName) {
                angular.forEach( key["clockworkmodrecovery"].files, function( allkey, allval ) {
                    fileList.push( allkey );
                });
                angular.forEach( key["cyanogenrecovery"].files, function( allkey, allval ) {
                    fileList.push( allkey );
                });
            }
	    });

	    $scope.recoveryFiles = fileList;
    });
  });
