(function (app) {

    'use strict';

    app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise( function ($injector, $location) {
            $location.path('/');
          });

        $stateProvider.state('toc', {
            name: 'toc',
            url: '/',
            data: {
                previous: '',
                title: 'Angular Tips and Tricks - Table of Contents',
                next: 'intro'
              },
              views: {
                'slide': {
                    templateUrl: 'views/toc.html'
                  }
                }
              })

            .state('intro', {
                  url: '/intro',
                  data: {
                    previous: '',
                    title: 'Intro - Angular Tips and Tricks',
                    next: ''
                  },
                  views: {
                    'slide': {
                        templateUrl: 'views/intro.html'
                      }
                    }
                  });

        $locationProvider.html5Mode(false);

      }]);

    app.run(['$location', function ($location) {
        $location.path('/');
      }]);

  })(angular.module('angularTipsAndTricksApp'));
