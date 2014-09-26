'use strict';

describe('Service: devicefileservice', function () {

  // load the service's module
  beforeEach(module('recoverybuilderApp'));

  // instantiate service
  var devicefileservice;
  beforeEach(inject(function (_devicefileservice_) {
    devicefileservice = _devicefileservice_;
  }));

  it('should do something', function () {
    expect(!!devicefileservice).toBe(true);
  });

});
