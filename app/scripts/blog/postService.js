/**
 * Created by y.dyumkin on 19.01.2015.
 */
'use strict';

/**
 * @ngdoc factory
 * @name anTestProjectApp.postService
 * @description
 * # postService
 * Factory in the anTestProjectApp.
 */
angular
  .module('anTestProjectApp')
  .factory('postService', postService);

postService.$inject = ['Restangular'];

function postService(Restangular)
{
  var service = {
    getPosts: getPosts,
    getPostById: getPostById
  };

  return service;

  /////////////////

  function getPosts(){
    return Restangular.all('blog').getList()
      .then(getPostsComplete, getPostsFailed);


    function getPostsComplete(posts) {
        return posts;
    }

    function getPostsFailed(response) {
        return response;
    }

  }

  function getPostById(id){
    return Restangular.one('blog', id)
      .then(getPostComplete, getPostFailed);

    function getPostComplete(post){
      return post;
    }

    function getPostFailed(response){
      return response;
    }
  }
}
