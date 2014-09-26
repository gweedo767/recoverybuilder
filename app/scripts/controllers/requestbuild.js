'use strict';

/**
 * @ngdoc function
 * @name recoverybuilderApp.controller:RequestbuildCtrl
 * @description
 * # RequestbuildCtrl
 * Controller of the recoverybuilderApp
 */
angular.module('recoverybuilderApp')
  .controller('RequestbuildCtrl', function ($scope, $log, $http) {
  	$scope.buildDevices = [];
  	$scope.recoverytype = "cwmr"; //default to cwmr
    $http.get( "https://s3.amazonaws.com/recoverybuilderwebsite/cm11devices.json").then(function(response) {
		var devices = [];
		$.each( response.data, function( key, val ) {
			if(val[1] == "cm-11.0") {
				devices.push( val[0] );
			}
		});

		$scope.buildDevices = devices;
	});

	$scope.issueBuildRequest = function(device) {
		var recoverytype = $scope.recoverytype;
		var bootimage = $scope.bootimage;
		var koushtouch = $scope.koushtouch;
		$log.log("starting build for " + device + "?email=" + email + "&recoverytype=" + recoverytype + "&bootimage=" + bootimage + "&koushtouch=" + koushtouch);
		alert("Build request for " + device + " issued.  You will be emailed on completion.");
		if(recoverytype == "cwmr") {
			$.get("http://jenkins.unstableapps.com/job/ClockworkMod%20Recovery%20Build/buildWithParameters?token=buildrecovery&DEVICENAME=" + device + "&EMAIL=" + email + "&BOOTIMAGE=" + bootimage + "&KOUSHTOUCH=" + koushtouch);
		} else if(recoverytype == "cm") {
			$.get("http://jenkins.unstableapps.com/job/Cyanogen%20Recovery%20Build/buildWithParameters?token=buildrecovery&DEVICENAME=" + device + "&EMAIL=" + email);
		} else if(recoverytype == "twrp") {
			$.get("http://jenkins.unstableapps.com/job/TWRP%20Recovery%20Build/buildWithParameters?token=buildrecovery&DEVICENAME=" + device + "&EMAIL=" + email);
		}
	};

	$scope.issueCustomRequest = function(device) {
		$scope.issueBuildRequest($scope.customdevice);
	}
  });
