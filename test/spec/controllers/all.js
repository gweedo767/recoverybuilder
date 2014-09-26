'use strict';

describe('Controller: AllCtrl', function () {

  // load the controller's module
  beforeEach(module('recoverybuilderApp'));

  var AllCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllCtrl = $controller('AllCtrl', {
      $scope: scope
    });
  }));
});
