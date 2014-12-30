'use strict';

/**
 * @ngdoc function
 * @name anTestProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anTestProjectApp
 */
angular
  .module('anTestProjectApp')
  .controller('MainController', MainController);

MainController.$inject = ['$scope', '$http'];

function MainController($scope, $http) {

  function createUnknownError(status) {
    return {
      status: status,
      statusText: 'Internal Server Error',
      description: 'No details available'
    };
  }

  $scope.awesomeThings = [];
  $scope.loading = true;

  $http({
    method: 'GET',
    url: 'http://apitestyii2.localhost/v1/blog'
  }).

    success(function (data) {
      $scope.loading = false;
      $scope.awesomeThings = data;
    }).

    error(function (data, status) {
      $scope.loading = false;
      $scope.error = data && data.message ? data : createUnknownError(status);
    });
}
