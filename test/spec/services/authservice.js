'use strict';

describe('Service: authService', function () {

  // load the service's module
  beforeEach(module('anTestProjectApp'));

  // instantiate service
  var authService;
  beforeEach(inject(function (_AuthService_) {
    authService = _AuthService_;
  }));

  it('should do something', function () {
    expect(!!authService).toBe(true);
  });

});
