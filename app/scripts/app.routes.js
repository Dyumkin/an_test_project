/**
 * Created by y.dyumkin on 26.12.2014.
 */

'use strict';

/**
 * @ngdoc overview
 * @name anTestProjectApp
 * @description
 * # anTestProjectApp
 *
 * Main routes of the application.
 */
angular.module('anTestProjectApp')
  .config(function ($routeProvider, USER_ROLES) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/blog/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'scripts/blog/about.html',
        controller: 'AboutController',
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.user]
        }
      })
      .when('/login', {
        templateUrl: 'scripts/security/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
