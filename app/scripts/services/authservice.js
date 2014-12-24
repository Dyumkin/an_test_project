'use strict';

/**
 * @ngdoc service
 * @name anTestProjectApp.AuthService
 * @description
 * # AuthService
 * Factory in the anTestProjectApp.
 */
angular.module('anTestProjectApp')
  .factory('AuthService', function ($cookies, $http, Restangular, Session) {

    var authService = {};

    var error = {
      message: '',
      status: false
    };

    var self = this;
    authService.login = function (credentials) {
      var rest = Restangular.all('v1/auth/login');
      return rest.post({username: credentials.username, password: credentials.password})
        .then(function (response) {

          return self.loginByToken(response.user.access_token);
        }, function (response) {
          console.log("Error with status code", response.status);
        });
    };

    this.loginByToken = function (token) {
      $http.defaults.headers.common['WWW-Authenticate'] = 'Bearer ' + token;

      return Restangular.all('v1/auth/login').post({access_token: token})
        .then(function (response) {
          Session.create(self.getRandomInt(1, 10000), response.user.id, response.user.role);
          $cookies.accessToken = token;
          return response.user;
        });
    };

    authService.logout = function () {
      //self.status.authorized = false;
      $cookies.accessToken = '';
      Session.destroy();
      Restangular.all('v1/auth/login').remove();
    };

    this.getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //authService.login = this.loginByCredentials(credentials);

    authService.isAuthenticated = function () {
      return !!Session.userId;
    };

    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
    };
    return authService;
  });
