'use strict';

/**
 * @ngdoc function
 * @name anTestProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anTestProjectApp
 */
(function () {
angular.module('anTestProjectApp')
  .controller('AboutController', AboutController);

AboutController.$inject = ['$scope', '$http'];

function AboutController($scope, $http) {

  $scope.awesomeThings = [];

}
})();