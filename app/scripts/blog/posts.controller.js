'use strict';

/**
 * @ngdoc function
 * @name anTestProjectApp.controller:PostsController
 * @description
 * # PostsController
 * Controller of the anTestProjectApp
 */
angular
  .module('anTestProjectApp')
  .controller('PostsController', PostsController);

PostsController.$inject = ['postService'];

function PostsController(postService) {

  var vm = this;
  vm.posts = [];
  vm.loading = true;

  activate();


  function createUnknownError(status) {
    return {
      status: status,
      statusText: 'Internal Server Error',
      description: 'No details available'
    };
  }

  function activate(){
    return getPosts().then(function() {
      vm.loading = false;
      //logger.info('Activated Posts View');
    });
  }

  function getPosts(){
    return postService.getPosts()
      .then(function(data) {
        vm.posts = data;
        return vm.posts;
      });
  }

/*  $http({
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
    });*/

   //Restangular.all('blog').getList();

}
