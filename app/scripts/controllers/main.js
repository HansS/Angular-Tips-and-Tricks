(function (app) {

    'use strict';

    function Controller ($rootScope, $state, $location, titleService) {
        this.state = '';
        this.tocUrl = $state.href('toc');
        this.next = '';
        this.nextUrl = '#';
        this.previous = '';
        this.previousUrl = '#';
        this.$state = $state;
        this.$location = $location;
        this.titleService = titleService;

        var _this = this;

        this.onStateChange = function (toState) {

            _this.state = toState.name;
            _this.next = toState.data.next;
            _this.nextUrl = _this.$state.href(_this.next);
            _this.previous = toState.data.previous;
            _this.previousUrl = _this.$state.href(_this.previous);
            titleService.setTitle(toState.data.title);

          };

        $rootScope.$on('$stateChangeSuccess', function (e, toState) {
            _this.onStateChange(toState);
          });
      }

    Controller.$inject = ['$rootScope', '$state', '$location', 'titleService'];

    app.controller('mainCtrl', Controller);

  })(angular.module('angularTipsAndTricksApp'));