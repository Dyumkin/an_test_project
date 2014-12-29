'use strict';

/**
 * @ngdoc service
 * @name anTestProjectApp.authService
 * @description
 * # authService
 * Factory in the anTestProjectApp.
 */
angular
  .module('anTestProjectApp')
  .factory('authService', authService);

authService.$inject = ['$cookies', '$http', 'Restangular', 'Session'];

function authService($cookies, $http, Restangular, Session) {

  var service = {
    login: login,
    logout: logout,
    isAuthenticated: isAuthenticated,
    isAuthorized: isAuthorized

  };

  return service;

  //////////////////

  function login(credentials) {
    var rest = Restangular.all('v1/auth/login');


    return rest.post({username: credentials.username, password: credentials.password})
      .then(function (response) {

        return loginByToken(response.user.access_token);
      }, function (response) {
        console.log('Error with status code', response.status);
      });
  }

  function loginByToken(token) {
    $http.defaults.headers.common['WWW-Authenticate'] = 'Bearer ' + token;

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return Restangular.all('v1/auth/login').post({access_token: token})
      .then(function (response) {
        Session.create(getRandomInt(1, 10000), response.user.id, response.user.role);
        $cookies.accessToken = token;
        return response.user;
      });
  }

  function logout() {
    //self.status.authorized = false;
    $cookies.accessToken = '';
    Session.destroy();
    Restangular.all('v1/auth/login').remove();
  }
  //authService.login = this.loginByCredentials(credentials);

  function isAuthenticated() {
    return !!Session.userId;
  }

  function isAuthorized(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated() &&
    authorizedRoles.indexOf(Session.userRole) !== -1);
  }

}
