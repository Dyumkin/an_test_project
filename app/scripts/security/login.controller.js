'use strict';

/**
 * @ngdoc function
 * @name anTestProjectApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the anTestProjectApp
 */
(function () {
angular
  .module('anTestProjectApp')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$rootScope', 'AUTH_EVENTS', 'authService'];

function LoginController($scope, $rootScope, AUTH_EVENTS, authService) {

  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.login = login;
  $scope.logout = logout;


  function login (credentials) {
    authService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  }

  function logout () {
    authService.logout();
  }
}
})();
