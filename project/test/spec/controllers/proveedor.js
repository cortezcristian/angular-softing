'use strict';

describe('Controller: ProveedorCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var ProveedorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProveedorCtrl = $controller('ProveedorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProveedorCtrl.awesomeThings.length).toBe(3);
  });
});
