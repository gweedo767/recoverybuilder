'use strict';

/**
 * @ngdoc service
 * @name recoverybuilderApp.deviceService
 * @description
 * # deviceService
 * Service in the recoverybuilderApp.
 */
angular.module('recoverybuilderApp')
  .service('deviceService', function deviceService($log, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var promise;

    var dataLoader = {
    	async: function() {
    		if( !promise ) {
    			$log.log('items not cached');
    			promise = $http.get('https://s3.amazonaws.com/recoverybuilderwebsite/devices.json').then(function(response) {
    				return response.data;
    			});
    		} else {
    			$log.log('Devices cached');
    		}
    		return promise;
    	}
    };

    return dataLoader;
  });
