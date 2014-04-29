(function (app){

    'use strict';

    function Service ($rootScope) {
        this.$rootScope = $rootScope;
      }

    Service.prototype.setTitle = function (title) {
        this.$rootScope.title = title;
      };

    Service.$inject = ['$rootScope'];

    app.service('titleService', Service);

  })(angular.module('angularTipsAndTricksApp'));
