'use strict';

describe('Controller: UpcomingeventsCtrl', function () {

  // load the controller's module
  beforeEach(module('yoloOctoBearApp'));

  var UpcomingeventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpcomingeventsCtrl = $controller('UpcomingeventsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(7);
  });
});
