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
        templateUrl: 'auth/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
