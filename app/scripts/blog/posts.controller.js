'use strict';

/**
 * @ngdoc function
 * @name anTestProjectApp.controller:PostsController
 * @description
 * # PostsController
 * Controller of the anTestProjectApp
 */
(function () {
angular
  .module('anTestProjectApp')
  .controller('PostsController', PostsController);

PostsController.$inject = ['postService'];

function PostsController(postService) {

  var vm = this;
  vm.posts = [];
  vm.loading = true;

  activate();


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

  function createUnknownError(status) {
    return {
      status: status,
      statusText: 'Internal Server Error',
      description: 'No details available'
    };
  }

}
})();
