'use strict';

/**
 * @ngdoc service
 * @name recoverybuilderApp.devicedetailsservice
 * @description
 * # devicedetailsservice
 * Service in the recoverybuilderApp.
 */
angular.module('recoverybuilderApp')
  .service('devicedetailsservice', function devicedetailsservice($log, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var promise;

    var dataLoader = {
    	async: function() {
    		if( !promise ) {
    			$log.log('device details not cached');
    			promise = $http.get('http://gweedo767.github.io/recoverybuilder/additionaldetails.json').then(function(response) {
    				return response.data;
    			});
    		} else {
    			$log.log('Devices Details cached');
    		}
    		return promise;
    	}
    };

    return dataLoader;
  });
