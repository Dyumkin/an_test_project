/**
 * Created by y.dyumkin on 26.12.2014.
 */
(function() {
  'use strict';

  angular
    .module('anTestProjectApp')
    .constant('AUTH_EVENTS', authEvents)
    .constant('USER_ROLES', userRoles);

  function authEvents()
  {
    return {
      loginSuccess: 'auth-login-success',
      loginFailed: 'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    };
  }

  function userRoles()
  {
    return{
      all: '*',
      admin: 'ROLE_ADMIN',
      user: 'ROLE_USER',
      guest: 'guest'
    };
  }
})();
