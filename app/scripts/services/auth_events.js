'use strict';

/**
 * @ngdoc service
 * @name anTestProjectApp.AUTH_EVENTS
 * @description
 * # AUTH_EVENTS
 * Constant in the anTestProjectApp.
 */
angular.module('anTestProjectApp')
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
    });
