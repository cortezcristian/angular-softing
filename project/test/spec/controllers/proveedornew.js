'use strict';

describe('Controller: ProveedornewCtrl', function () {

  // load the controller's module
  beforeEach(module('projectApp'));

  var ProveedornewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProveedornewCtrl = $controller('ProveedornewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProveedornewCtrl.awesomeThings.length).toBe(3);
  });
});
