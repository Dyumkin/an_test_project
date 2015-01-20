/**
 * Created by y.dyumkin on 20.01.2015.
 */
'use strict';

/**
 * @ngdoc function
 * @name anTestProjectApp.controller:PostDetailController
 * @description
 * # PostDetailController
 * Controller of the anTestProjectApp
 */
angular
  .module('anTestProjectApp')
  .controller('PostDetailController', PostDetailController);

PostDetailController.$inject = ['postService', '$routeParams'];

function PostDetailController(postService, $routeParams){

  var vm = this;
  vm.id = $routeParams.id;
  vm.loading = true;
  vm.post = {};

  activate();

  function activate(){
    return getPost().then(function() {
      vm.loading = false;
    });
  }

  function getPost(){
    return postService.getPostById(vm.id)
      .then(function(data) {
        vm.post = data;
        return vm.post;
      });
  }

}
