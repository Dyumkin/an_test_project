'use strict';

/**
 * @ngdoc overview
 * @name anTestProjectApp
 * @description
 * # anTestProjectApp
 *
 * Main module of the application.
 */
angular
  .module('anTestProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ui.router'
  ])
  .run(runBlock);

runBlock.$inject = ['$rootScope', 'AUTH_EVENTS', 'authService'];

function runBlock ($rootScope, AUTH_EVENTS, authService) {
    $rootScope.$on('$routeChangeStart ', function (event, next) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!authService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        if (authService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        }
      }
    });
}
  /*.config(function ($routeProvider, USER_ROLES) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.user]
        }
      })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://apitestyii2.localhost/');
  })
*//*  .config(function ($stateProvider, USER_ROLES) {
    $stateProvider.state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      data: {
        authorizedRoles: [USER_ROLES.admin, USER_ROLES.user]
      }
    });
  })*//*
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push([
      '$injector',
      function ($injector) {
        return $injector.get('authInterceptor');
      }
    ]);
  })
  .run(function ($rootScope, AUTH_EVENTS, AuthService) {
    $rootScope.$on('$routeChangeStart ', function (event, next) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!AuthService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        }
      }
    });
  });
*/
