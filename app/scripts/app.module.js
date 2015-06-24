'use strict';

/**
 * @ngdoc overview
 * @name anTestProjectApp
 * @description
 * # anTestProjectApp
 *
 * Main module of the application.
 */
(function () {
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
})();
