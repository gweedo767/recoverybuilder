'use strict';

/**
 * @ngdoc function
 * @name recoverybuilderApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the recoverybuilderApp
 */
angular.module('recoverybuilderApp')
  .controller('AllCtrl', function ($scope, $routeParams, devicefileservice) {
    //load current items database
    $scope.deviceName = $routeParams.deviceName;

    devicefileservice.async().then(function(data) {
    	var fileList = [];
    	$.each( data, function( key, val ) {
            if( key == $scope.deviceName) {
                $.each( val["clockworkmodrecovery"].files, function( allkey, allval ) {
                        fileList.push( allval );
                });
                $.each( val["cyanogenrecovery"].files, function( allkey, allval ) {
                        fileList.push( allval );
                });
            }
	    });

	    $scope.recoveryFiles = fileList;
    });
  });
