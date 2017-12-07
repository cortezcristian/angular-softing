'use strict';

describe('Service: provServ', function () {

  // load the service's module
  beforeEach(module('projectApp'));

  // instantiate service
  var provServ;
  beforeEach(inject(function (_provServ_) {
    provServ = _provServ_;
  }));

  it('should do something', function () {
    expect(!!provServ).toBe(true);
  });

});
