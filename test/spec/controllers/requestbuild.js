'use strict';

describe('Controller: RequestbuildCtrl', function () {

  // load the controller's module
  beforeEach(module('recoverybuilderApp'));

  var RequestbuildCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestbuildCtrl = $controller('RequestbuildCtrl', {
      $scope: scope
    });
  }));
});
