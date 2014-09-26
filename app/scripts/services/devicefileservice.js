'use strict';

/**
 * @ngdoc service
 * @name recoverybuilderApp.devicefileservice
 * @description
 * # devicefileservice
 * Service in the recoverybuilderApp.
 */
angular.module('recoverybuilderApp')
  .service('devicefileservice', function devicefileservice($http, $log) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var promise;

    var dataLoader = {
    	async: function() {
    		if( !promise ) {
    			$log.log('details not cached');
    			promise = $http.get('https://s3.amazonaws.com/recoverybuilderwebsite/devicedetails.json').then(function(response) {
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
