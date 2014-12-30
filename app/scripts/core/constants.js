/**
 * Created by y.dyumkin on 26.12.2014.
 */

  angular
    .module('anTestProjectApp')
    .constant('AUTH_EVENTS', {
      loginSuccess: 'auth-login-success',
      loginFailed: 'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    })
    .constant('USER_ROLES', {
      all: '*',
      admin: 'ROLE_ADMIN',
      user: 'ROLE_USER',
      guest: 'guest'});

