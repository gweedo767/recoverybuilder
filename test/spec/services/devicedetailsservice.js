'use strict';

describe('Service: devicedetailsservice', function () {

  // load the service's module
  beforeEach(module('recoverybuilderApp'));

  // instantiate service
  var devicedetailsservice;
  beforeEach(inject(function (_devicedetailsservice_) {
    devicedetailsservice = _devicedetailsservice_;
  }));

  it('should do something', function () {
    expect(!!devicedetailsservice).toBe(true);
  });

});
