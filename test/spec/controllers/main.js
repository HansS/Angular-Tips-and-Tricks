'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTipsAndTricksApp'));

  var mainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mainCtrl = $controller('mainCtrl', {
      $scope: scope
    });
  }));

  it('should set the state on the controller', function () {
    expect(mainCtrl.state).toBeDefined();
  });
});
