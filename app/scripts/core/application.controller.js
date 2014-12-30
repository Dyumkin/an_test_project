'use strict';

/**
 * @ngdoc function
 * @name anTestProjectApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the anTestProjectApp
 */
angular
  .module('anTestProjectApp')
  .controller('ApplicationController', ApplicationController);

ApplicationController.$inject = ['$scope', 'USER_ROLES', 'authService'];

function ApplicationController($scope, USER_ROLES, authService) {
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = authService.isAuthorized;
  $scope.isLoginPage = false;
  $scope.setCurrentUser = setCurrentUser;

  function setCurrentUser (user) {
    $scope.currentUser = user;
  }

}
