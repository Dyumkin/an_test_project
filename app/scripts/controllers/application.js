'use strict';

/**
 * @ngdoc function
 * @name anTestProjectApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the anTestProjectApp
 */
angular.module('anTestProjectApp')
  .controller('ApplicationCtrl', function ($scope, USER_ROLES, AuthService, $http) {
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;
        $scope.isLoginPage = false;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };

    function createUnknownError(status) {
      return {
        status: status,
        statusText: 'Internal Server Error',
        description: 'No details available'
      };
    }

    $scope.awesomeThings = [];
    $scope.loading = true;

    // Get awesome things list
    //$http.defaults.headers.common.Authorization = 'Bearer YER7L_';
    $http({
      method: 'GET',
      url: 'http://apitestyii2.localhost/v1/blog'/*,
      headers: {
        'Www-Authenticate': 'Bearer YER7L_'
      }*/
    }).

      success(function (data) {
        $scope.loading = false;
        $scope.awesomeThings = data;

/*        // Get description of each thing
        $scope.awesomeThings.forEach(function (thing) {
          thing.loading = true;

          $http({method: 'GET', url: thing.href}).
            success(function (data) {
              thing.loading = false;
              thing.description = data.description;
            }).
            error(function (data, status) {
              thing.loading = false;
              thing.error = data && data.description ? data : createUnknownError(status);
            });
        });*/
      }).

      error(function (data, status) {
        $scope.loading = false;
        $scope.error = data && data.message ? data : createUnknownError(status);
      });
  });
