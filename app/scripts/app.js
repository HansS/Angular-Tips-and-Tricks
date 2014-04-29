'use strict';

(function (app) {
    app.run(['$rootScope', function ($rootScope) {
        $rootScope.title = 'Angular Tips and Tricks';
      }]);
  })(
angular
  .module('angularTipsAndTricksApp', [
    'ngResource',
    'ngAnimate',
    'ui.router'
  ]));
